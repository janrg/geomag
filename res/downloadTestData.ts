/* eslint-disable no-await-in-loop */
import * as fs from 'fs';
import fetch from 'node-fetch';

const randomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

const randomDecimal = (min: number, max: number, decimals: number): number =>
    randomInteger(min * 10 ** decimals, max * 10 ** decimals) / 10 ** decimals;

const randomBoolean = (): boolean =>
    Math.random() < 0.5;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const downloadTestData = async () => {
    let testData = 'export const testData = [\n   ';
    for (let i = 0; i < 200; i++) {
        const year = randomInteger(2020, 2025);
        const month = randomInteger(1, 13);
        const latitude = randomDecimal(-85, 85, 1);
        const longitude = randomDecimal(-180, 180, 1);
        const altitude = randomBoolean() ? randomDecimal(0, 100, 1) : 0;
        const queryParams = {
            latitude,
            longitude,
            altitude,
            date: `${year}-${(`0${month}`).slice(-2)}-01`,
            format: 'json',
        };
        const queryParamString = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`).join('&');
        const response = await fetch(`http://geomag.bgs.ac.uk/web_service/GMModels/wmm/2020?${queryParamString}`);
        const json = await response.json();
        const field = json['geomagnetic-field-model-result']['field-value'];
        const entry = ' {\n' +
            `        year: ${year},\n` +
            `        month: ${month},\n` +
            `        latitude: ${latitude},\n` +
            `        longitude: ${longitude},\n` +
            `        altitude: ${altitude},\n` +
            `        declination: ${field.declination.value},\n` +
            `        inclination: ${field.inclination.value},\n` +
            `        intensity: ${field['total-intensity'].value},\n` +
            `        northIntensity: ${field['north-intensity'].value},\n` +
            `        eastIntensity: ${field['east-intensity'].value},\n` +
            `        horizontalIntensity: ${field['horizontal-intensity'].value},\n` +
            `        verticalIntensity: ${field['vertical-intensity'].value},\n` +
            '    },';
        testData += entry;
        await sleep(1000); // don't hammer the server with API requests
    }
    testData += '\n];\n';
    fs.writeFileSync('test/testData.ts', testData, 'utf8');
};

downloadTestData();
