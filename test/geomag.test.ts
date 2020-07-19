import { field } from '../src/geomag';
import { testData } from './testData';

describe('the field function', () => {
    testData.forEach(({ year, month, altitude, latitude, longitude, declination }) => {
        it('should calculate the magnetic declination correctly', () => {
            global.Date.now = jest.fn(() => Date.UTC(year, month - 1));
            expect(field(latitude, longitude, altitude).declination).toBeCloseTo(declination, 1);
        });
    });

    testData.forEach(({ year, month, altitude, latitude, longitude, inclination }) => {
        it('should calculate the magnetic inclination correctly', () => {
            global.Date.now = jest.fn(() => Date.UTC(year, month - 1));
            expect(field(latitude, longitude, altitude).inclination).toBeCloseTo(inclination, 1);
        });
    });

    testData.forEach(({ year, month, altitude, latitude, longitude, intensity }) => {
        it('should calculate the magnetic intensity correctly', () => {
            global.Date.now = jest.fn(() => Date.UTC(year, month - 1));
            expect(Math.abs(field(latitude, longitude, altitude).intensity - intensity)).toBeLessThanOrEqual(1);
        });
    });

    testData.forEach(({ year, month, altitude, latitude, longitude, northIntensity }) => {
        it('should calculate the magnetic north intensity correctly', () => {
            global.Date.now = jest.fn(() => Date.UTC(year, month - 1));
            expect(Math.abs(field(latitude, longitude, altitude).northIntensity - northIntensity))
                .toBeLessThanOrEqual(1);
        });
    });

    testData.forEach(({ year, month, altitude, latitude, longitude, eastIntensity }) => {
        it('should calculate the magnetic east intensity correctly', () => {
            global.Date.now = jest.fn(() => Date.UTC(year, month - 1));
            expect(Math.abs(field(latitude, longitude, altitude).eastIntensity - eastIntensity)).toBeLessThanOrEqual(1);
        });
    });

    testData.forEach(({ year, month, altitude, latitude, longitude, horizontalIntensity }) => {
        it('should calculate the magnetic horizontal intensity correctly', () => {
            global.Date.now = jest.fn(() => Date.UTC(year, month - 1));
            expect(Math.abs(field(latitude, longitude, altitude).horizontalIntensity - horizontalIntensity))
                .toBeLessThanOrEqual(1);
        });
    });

    testData.forEach(({ year, month, altitude, latitude, longitude, verticalIntensity }) => {
        it('should calculate the magnetic vertical intensity correctly', () => {
            global.Date.now = jest.fn(() => Date.UTC(year, month - 1));
            expect(Math.abs(field(latitude, longitude, altitude).verticalIntensity - verticalIntensity))
                .toBeLessThanOrEqual(1);
        });
    });
});
