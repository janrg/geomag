export const zeroArray2D = (rows: number, columns: number): Array<Array<number>> =>
    Array(rows).fill('').map(_ => Array(columns).fill(0));

export const julianYearsSince2020 = () =>
    ((new Date(Date.now())).valueOf() / 86400000 + 2440587.5 - 2458850) / 365.25;

export const round = (num: number, decimalPlaces: number): number =>
    Number(`${Math.round(Number(`${num}e+${decimalPlaces}`))}e-${decimalPlaces}`);

export const normalizeInclination = (inclination: number): number => {
    if (inclination > 90) {
        return inclination - 180;
    } else if (inclination < -90) {
        return inclination + 180;
    }
    return inclination;
};

export const deg2rad = (deg: number): number => deg * 0.017453292519943295;
export const rad2deg = (rad: number): number => rad * 57.29577951308232;
