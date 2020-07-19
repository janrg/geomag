import * as fs from 'fs';
import { zeroArray2D } from '../src/util';

const coefficients = fs.readFileSync('./res/WMM.COF', 'utf8')
    .replace(/\r/g, '')
    .split('\n')
    .filter(line => !line.includes('9999999999') && !line.includes('WMM') && line !== '')
    .map(line => line
        .replace(/^[ ]+/, '')
        .split(/[ ]+/)
        .map(entry => Number(entry)));

const gnmWmm2020 = zeroArray2D(13, 13);
const hnmWmm2020 = zeroArray2D(13, 13);
const gtnmWmm2020 = zeroArray2D(13, 13);
const htnmWmm2020 = zeroArray2D(13, 13);

coefficients.forEach(entry => {
    gnmWmm2020[entry[0]][entry[1]] = entry[2];
    hnmWmm2020[entry[0]][entry[1]] = entry[3];
    gtnmWmm2020[entry[0]][entry[1]] = entry[4];
    htnmWmm2020[entry[0]][entry[1]] = entry[5];
});

const serializeParameterArrays = (): string => {
    const parameterArrays: Array<[string, Array<Array<number>>]> = [
        ['gnmWmm2020', gnmWmm2020],
        ['hnmWmm2020', hnmWmm2020],
        ['gtnmWmm2020', gtnmWmm2020],
        ['htnmWmm2020', htnmWmm2020],
    ];
    return `${parameterArrays.map(([name, parameters]) =>
        `export const ${name} = [\n${parameters.map(line => `    [${line.join(', ')}],\n`).join('')}];`)
        .join('\n\n')}\n`;
};

const globeData =
`\nexport const globe = {
    a: 6378.137,
    b: 6356.7523142,
    r0: 6371.2,
};\n`;

fs.writeFileSync('./src/constants.ts', serializeParameterArrays() + globeData, 'utf8');
