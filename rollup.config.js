import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const copyrightNotice = `/**
 * @license geomag
 * (c) 2020 Jan Greis
 * licensed under MIT
 */
`;

const rollupConfig = (minify, format) => {
    const config = {
        input: 'src/geomag.ts',
        output: {
            banner: copyrightNotice,
            file: `dist/geomag${minify ? '.min' : ''}.${format === 'es' ? 'm' : ''}js`,
            format,
            name: 'geomag',
        },
        plugins: [typescript()],
    };
    if (minify) {
        config.plugins.push(terser());
        config.output.sourcemap = true;
    }
    return config;
};

export default [
    rollupConfig(false, 'umd'),
    rollupConfig(true, 'umd'),
    rollupConfig(false, 'es'),
    rollupConfig(true, 'es'),
];
