const fs = require('fs');

// Some packages still can't deal with mjs file extensions
fs.copyFileSync('dist/geomag.mjs', 'dist/geomag.m.js');
