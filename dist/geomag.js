/**
 * @license geomag
 * (c) 2020 Jan Greis
 * licensed under MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.geomag = {}));
}(this, (function (exports) { 'use strict';

    var gnmWmm2020 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-29404.5, -1450.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-2500, 2982, 1676.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1363.9, -2381, 1236.2, 525.7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [903.1, 809.4, 86.2, -309.4, 47.9, 0, 0, 0, 0, 0, 0, 0, 0],
        [-234.4, 363.1, 187.8, -140.7, -151.2, 13.7, 0, 0, 0, 0, 0, 0, 0],
        [65.9, 65.6, 73, -121.5, -36.2, 13.5, -64.7, 0, 0, 0, 0, 0, 0],
        [80.6, -76.8, -8.3, 56.5, 15.8, 6.4, -7.2, 9.8, 0, 0, 0, 0, 0],
        [23.6, 9.8, -17.5, -0.4, -21.1, 15.3, 13.7, -16.5, -0.3, 0, 0, 0, 0],
        [5, 8.2, 2.9, -1.4, -1.1, -13.3, 1.1, 8.9, -9.3, -11.9, 0, 0, 0],
        [-1.9, -6.2, -0.1, 1.7, -0.9, 0.6, -0.9, 1.9, 1.4, -2.4, -3.9, 0, 0],
        [3, -1.4, -2.5, 2.4, -0.9, 0.3, -0.7, -0.1, 1.4, -0.6, 0.2, 3.1, 0],
        [-2, -0.1, 0.5, 1.3, -1.2, 0.7, 0.3, 0.5, -0.2, -0.5, 0.1, -1.1, -0.3],
    ];
    var hnmWmm2020 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 4652.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, -2991.6, -734.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, -82.2, 241.8, -542.9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 282, -158.4, 199.8, -350.1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 47.7, 208.4, -121.3, 32.2, 99.1, 0, 0, 0, 0, 0, 0, 0],
        [0, -19.1, 25, 52.7, -64.4, 9, 68.1, 0, 0, 0, 0, 0, 0],
        [0, -51.4, -16.8, 2.3, 23.5, -2.2, -27.2, -1.9, 0, 0, 0, 0, 0],
        [0, 8.4, -15.3, 12.8, -11.8, 14.9, 3.6, -6.9, 2.8, 0, 0, 0, 0],
        [0, -23.3, 11.1, 9.8, -5.1, -6.2, 7.8, 0.4, -1.5, 9.7, 0, 0, 0],
        [0, 3.4, -0.2, 3.5, 4.8, -8.6, -0.1, -4.2, -3.4, -0.1, -8.8, 0, 0],
        [0, 0, 2.6, -0.5, -0.4, 0.6, -0.2, -1.7, -1.6, -3, -2, -2.6, 0],
        [0, -1.2, 0.5, 1.3, -1.8, 0.1, 0.7, -0.1, 0.6, 0.2, -0.9, 0, 0.5],
    ];
    var gtnmWmm2020 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [6.7, 7.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-11.5, -7.1, -2.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2.8, -6.2, 3.4, -12.2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-1.1, -1.6, -6, 5.4, -5.5, 0, 0, 0, 0, 0, 0, 0, 0],
        [-0.3, 0.6, -0.7, 0.1, 1.2, 1, 0, 0, 0, 0, 0, 0, 0],
        [-0.6, -0.4, 0.5, 1.4, -1.4, 0, 0.8, 0, 0, 0, 0, 0, 0],
        [-0.1, -0.3, -0.1, 0.7, 0.2, -0.5, -0.8, 1, 0, 0, 0, 0, 0],
        [-0.1, 0.1, -0.1, 0.5, -0.1, 0.4, 0.5, 0, 0.4, 0, 0, 0, 0],
        [-0.1, -0.2, 0, 0.4, -0.3, 0, 0.3, 0, 0, -0.4, 0, 0, 0],
        [0, 0, 0, 0.2, -0.1, -0.2, 0, -0.1, -0.2, -0.1, 0, 0, 0],
        [0, -0.1, 0, 0, 0, -0.1, 0, 0, -0.1, -0.1, -0.1, -0.1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.1],
    ];
    var htnmWmm2020 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, -25.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, -30.2, -23.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 5.7, -1, 1.1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0.2, 6.9, 3.7, -5.6, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0.1, 2.5, -0.9, 3, 0.5, 0, 0, 0, 0, 0, 0, 0],
        [0, 0.1, -1.8, -1.4, 0.9, 0.1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0.5, 0.6, -0.7, -0.2, -1.2, 0.2, 0.3, 0, 0, 0, 0, 0],
        [0, -0.3, 0.7, -0.2, 0.5, -0.3, -0.5, 0.4, 0.1, 0, 0, 0, 0],
        [0, -0.3, 0.2, -0.4, 0.4, 0.1, 0, -0.2, 0.5, 0.2, 0, 0, 0],
        [0, 0, 0.1, -0.3, 0.1, -0.2, 0.1, 0, -0.1, 0.2, 0, 0, 0],
        [0, 0, 0.1, 0, 0.2, 0, 0, 0.1, 0, -0.1, 0, 0, 0],
        [0, 0, 0, -0.1, 0.1, 0, 0, 0, 0.1, 0, 0, 0, -0.1],
    ];
    var globe = {
        a: 6378.137,
        b: 6356.7523142,
        r0: 6371.2
    };

    var zeroArray2D = function (rows, columns) {
        return Array(rows).fill('').map(function (_) { return Array(columns).fill(0); });
    };
    var julianYearsSince2020 = function () {
        return ((new Date(Date.now())).valueOf() / 86400000 + 2440587.5 - 2458850) / 365.25;
    };
    var round = function (num, decimalPlaces) {
        return Number(Math.round(Number(num + "e+" + decimalPlaces)) + "e-" + decimalPlaces);
    };
    var normalizeInclination = function (inclination) {
        if (inclination > 90) {
            return inclination - 180;
        }
        else if (inclination < -90) {
            return inclination + 180;
        }
        return inclination;
    };
    var deg2rad = function (deg) { return deg * 0.017453292519943295; };
    var rad2deg = function (rad) { return rad * 57.29577951308232; };

    var P = zeroArray2D(13, 13);
    var DP = zeroArray2D(13, 13);
    var gnm = zeroArray2D(13, 13);
    var hnm = zeroArray2D(13, 13);
    var sm = Array(13).fill(0);
    var cm = Array(13).fill(0);
    var root = Array(13).fill(0);
    var roots = zeroArray2D(13, 13).map(function (row) { return row.map(function (_) { return [0, 0]; }); });
    for (var n = 2; n <= 12; n++) {
        root[n] = Math.sqrt((2.0 * n - 1) / (2.0 * n));
    }
    for (var m = 0; m <= 12; m++) {
        var mm = m * m;
        for (var n = Math.max(m + 1, 2); n <= 12; n++) {
            roots[m][n][0] = Math.sqrt((n - 1) * (n - 1) - mm);
            roots[m][n][1] = 1.0 / Math.sqrt(n * n - mm);
        }
    }
    var field = function (latitude, longitude, altitude) {
        if (altitude === void 0) { altitude = 0; }
        var cosLat = Math.cos(deg2rad(latitude));
        var sinLat = Math.sin(deg2rad(latitude));
        var sr = Math.sqrt(Math.pow(globe.a, 2) * Math.pow(cosLat, 2) + Math.pow(globe.b, 2) * Math.pow(sinLat, 2));
        var theta = Math.atan2(cosLat * (altitude * sr + Math.pow(globe.a, 2)), sinLat * (altitude * sr + Math.pow(globe.b, 2)));
        var r = Math.sqrt(Math.pow(altitude, 2) +
            2 * altitude * sr +
            (Math.pow(globe.a, 4) - (Math.pow(globe.a, 4) - Math.pow(globe.b, 4)) * Math.pow(sinLat, 2)) /
                (Math.pow(globe.a, 2) - (Math.pow(globe.a, 2) - Math.pow(globe.b, 2)) * Math.pow(sinLat, 2)));
        var c = Math.cos(theta);
        var s = Math.sin(theta);
        var invS = 1 / (s + (s === 0 ? 1e-8 : 0));
        P[0][0] = 1;
        P[1][1] = s;
        P[1][0] = c;
        DP[1][0] = -s;
        DP[1][1] = c;
        for (var n = 2; n <= 12; n++) {
            P[n][n] = P[n - 1][n - 1] * s * root[n];
            DP[n][n] = (DP[n - 1][n - 1] * s + P[n - 1][n - 1] * c) * root[n];
        }
        for (var m = 0; m <= 12; m++) {
            for (var n = Math.max(m + 1, 2); n <= 12; n++) {
                P[n][m] = (P[n - 1][m] * c * (2 * n - 1) - P[n - 2][m] * roots[m][n][0]) * roots[m][n][1];
                DP[n][m] = ((DP[n - 1][m] * c - P[n - 1][m] * s) * (2 * n - 1) - DP[n - 2][m] * roots[m][n][0]) *
                    roots[m][n][1];
            }
        }
        var julianYears = julianYearsSince2020();
        for (var n = 1; n <= 12; n++) {
            for (var m = 0; m <= 12; m++) {
                gnm[n][m] = gnmWmm2020[n][m] + julianYears * gtnmWmm2020[n][m];
                hnm[n][m] = hnmWmm2020[n][m] + julianYears * htnmWmm2020[n][m];
            }
        }
        for (var m = 0; m <= 12; m++) {
            sm[m] = Math.sin(m * deg2rad(longitude));
            cm[m] = Math.cos(m * deg2rad(longitude));
        }
        var BR = 0.0;
        var BTheta = 0.0;
        var BPhi = 0.0;
        var fn0 = globe.r0 / r;
        var fn = Math.pow(fn0, 2);
        for (var n = 1; n <= 12; n++) {
            var c1n = 0;
            var c2n = 0;
            var c3n = 0;
            for (var m = 0; m <= n; m++) {
                var tmp = gnm[n][m] * cm[m] + hnm[n][m] * sm[m];
                c1n += tmp * P[n][m];
                c2n += tmp * DP[n][m];
                c3n += m * (gnm[n][m] * sm[m] - hnm[n][m] * cm[m]) * P[n][m];
            }
            fn *= fn0;
            BR += (n + 1) * c1n * fn;
            BTheta -= c2n * fn;
            BPhi += c3n * fn * invS;
        }
        var psi = theta - (Math.PI / 2 - deg2rad(latitude));
        var sinPsi = Math.sin(psi);
        var cosPsi = Math.cos(psi);
        var X = -BTheta * cosPsi - BR * sinPsi;
        var Y = BPhi;
        var Z = BTheta * sinPsi - BR * cosPsi;
        var declination = X !== 0 || Y !== 0 ? round(rad2deg(Math.atan2(Y, X)), 2) : 0;
        var inclination = Y !== 0 || (X !== 0 && Z !== 0)
            ? normalizeInclination(rad2deg(Math.atan2(Z * Math.sin(Math.atan2(Y, X)), Y)))
            : 0;
        return {
            declination: round(declination, 2),
            inclination: round(inclination, 2),
            intensity: Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2) + Math.pow(Z, 2))),
            northIntensity: Math.round(X),
            eastIntensity: Math.round(Y),
            verticalIntensity: Math.round(Z),
            horizontalIntensity: Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)))
        };
    };

    exports.field = field;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
