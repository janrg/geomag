export interface Field {
    declination: number;
    inclination: number;
    intensity: number;
    northIntensity: number;
    eastIntensity: number;
    verticalIntensity: number;
    horizontalIntensity: number;
}

export function field(latitude: number, longitude: number, altitude?: number): Field;
