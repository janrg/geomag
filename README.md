# geomag

[![MIT License][license-image]][license-url]

A JavaScript module for accurately calculating the parameters of the geomagnetic field incl. declination (variation),
and inclination (dip) using the World Magnetic Model (currently WMM2020, valid from 2020-2025). It is
adapted from `magvar` by Darren Yeates (https://github.com/dpyeates/magvar)

## Documentation

### Installation

#### Script Include

Compiled versions (both minified and not) are located in `dist/`.

```html
<script src="{yourjspath}/geomag.min.js"></script>
```

These versions expose a `geomag` global.

#### NPM

```
npm install geomag
```

For bundling (e.g., with Rollup) you can then import the ES6 module via

```js
import * as geomag from 'geomag'
```

or directly use it in the browser via

```js
import * as geomag from 'node_modules/geomag/dist/geomag-es.js'
```

#### Usage

```js
import * as geomag from 'geomag';

const field = geomag.field(latitude, longitude);
// or const field = geomag.field(latitude, longitude, altitude);
const { 
    declination,
    inclination,
    intensity,
    northIntensity,
    eastIntensity,
    verticalIntensity,
    horizontalIntensity,
} = field;
```

`latitude` is the geographic latitude (WGS 84) in degrees (-90 to 90, north is positive, south negative).

`longitude` is the geographic longitude (WGS 84) in degrees (-180 to 180, east is positive, west negative).

`altitude` is the altitude in km above sea level. The parameter is optional and defaults to 0 if not provided.

`declination` is the angle in degrees between magnetic north and true north in the horizontal plane. Positive values
correspond to magnetic north pointing eastward from true north.

`inclination` is the angle in degrees of the magnetic field lines with respect to the horizontal plane. Positive
values correspond to the field pointing downward.

`intensity`, `northIntensity`, `eastIntensity`, `verticalIntensity`, and `horizontalIntensity` are the intensities in
nT of the geomagnetic fields - total magnitude, north-pointing component, east-pointing component, vertical component,
and horizontal component, respectively.

#### TypeScript

The package provides type definitions in `dist/geomag.d.ts`.

## License

geomag is freely distributable under the terms of the
[MIT license](LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
