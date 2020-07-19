import { globe, gnmWmm2020, gtnmWmm2020, hnmWmm2020, htnmWmm2020 } from './constants';
import { Field } from './types';
import { deg2rad, julianYearsSince2020, normalizeInclination, rad2deg, round, zeroArray2D } from './util';

const P = zeroArray2D(13, 13);
const DP = zeroArray2D(13, 13);
const gnm = zeroArray2D(13, 13);
const hnm = zeroArray2D(13, 13);
const sm = Array(13).fill(0);
const cm = Array(13).fill(0);
const root = Array(13).fill(0);
const roots = zeroArray2D(13, 13).map(row => row.map(_ => [0, 0]));

for (let n = 2; n <= 12; n++) {
    root[n] = Math.sqrt((2.0 * n - 1) / (2.0 * n));
}

for (let m = 0; m <= 12; m++) {
    const mm = m * m;
    for (let n = Math.max(m + 1, 2); n <= 12; n++) {
        roots[m][n][0] = Math.sqrt((n - 1) * (n - 1) - mm);
        roots[m][n][1] = 1.0 / Math.sqrt(n * n - mm);
    }
}

export const field = (latitude: number, longitude: number, altitude: number = 0): Field => {
    const cosLat = Math.cos(deg2rad(latitude));
    const sinLat = Math.sin(deg2rad(latitude));
    const sr = Math.sqrt(globe.a ** 2 * cosLat ** 2 + globe.b ** 2 * sinLat ** 2);
    const theta = Math.atan2(cosLat * (altitude * sr + globe.a ** 2), sinLat * (altitude * sr + globe.b ** 2));
    const r = Math.sqrt(
        altitude ** 2 +
        2 * altitude * sr +
        (globe.a ** 4 - (globe.a ** 4 - globe.b ** 4) * sinLat ** 2) /
        (globe.a ** 2 - (globe.a ** 2 - globe.b ** 2) * sinLat ** 2));
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    const invS = 1 / (s + (s === 0 ? 1e-8 : 0));
    P[0][0] = 1;
    P[1][1] = s;
    P[1][0] = c;
    DP[1][0] = -s;
    DP[1][1] = c;

    for (let n = 2; n <= 12; n++) {
        P[n][n] = P[n - 1][n - 1] * s * root[n];
        DP[n][n] = (DP[n - 1][n - 1] * s + P[n - 1][n - 1] * c) * root[n];
    }

    for (let m = 0; m <= 12; m++) {
        for (let n = Math.max(m + 1, 2); n <= 12; n++) {
            P[n][m] = (P[n - 1][m] * c * (2 * n - 1) - P[n - 2][m] * roots[m][n][0]) * roots[m][n][1];
            DP[n][m] = ((DP[n - 1][m] * c - P[n - 1][m] * s) * (2 * n - 1) - DP[n - 2][m] * roots[m][n][0]) *
                roots[m][n][1];
        }
    }

    const julianYears = julianYearsSince2020();
    for (let n = 1; n <= 12; n++) {
        for (let m = 0; m <= 12; m++) {
            gnm[n][m] = gnmWmm2020[n][m] + julianYears * gtnmWmm2020[n][m];
            hnm[n][m] = hnmWmm2020[n][m] + julianYears * htnmWmm2020[n][m];
        }
    }

    for (let m = 0; m <= 12; m++) {
        sm[m] = Math.sin(m * deg2rad(longitude));
        cm[m] = Math.cos(m * deg2rad(longitude));
    }

    let BR = 0.0;
    let BTheta = 0.0;
    let BPhi = 0.0;
    const fn0 = globe.r0 / r;
    let fn = fn0 ** 2;

    for (let n = 1; n <= 12; n++) {
        let c1n = 0;
        let c2n = 0;
        let c3n = 0;
        for (let m = 0; m <= n; m++) {
            const tmp = gnm[n][m] * cm[m] + hnm[n][m] * sm[m];
            c1n += tmp * P[n][m];
            c2n += tmp * DP[n][m];
            c3n += m * (gnm[n][m] * sm[m] - hnm[n][m] * cm[m]) * P[n][m];
        }
        fn *= fn0;
        BR += (n + 1) * c1n * fn;
        BTheta -= c2n * fn;
        BPhi += c3n * fn * invS;
    }

    const psi = theta - (Math.PI / 2 - deg2rad(latitude));
    const sinPsi = Math.sin(psi);
    const cosPsi = Math.cos(psi);
    const X = -BTheta * cosPsi - BR * sinPsi;
    const Y = BPhi;
    const Z = BTheta * sinPsi - BR * cosPsi;

    const declination = X !== 0 || Y !== 0 ? round(rad2deg(Math.atan2(Y, X)), 2) : 0;
    const inclination = Y !== 0 || (X !== 0 && Z !== 0)
        ? normalizeInclination(rad2deg(Math.atan2(Z * Math.sin(Math.atan2(Y, X)), Y)))
        : 0;

    return {
        declination: round(declination, 2),
        inclination: round(inclination, 2),
        intensity: Math.round(Math.sqrt(X ** 2 + Y ** 2 + Z ** 2)),
        northIntensity: Math.round(X),
        eastIntensity: Math.round(Y),
        verticalIntensity: Math.round(Z),
        horizontalIntensity: Math.round(Math.sqrt(X ** 2 + Y ** 2)),
    };
};
