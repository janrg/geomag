module.exports = {
    presets: [
        ['@babel/env', {
            targets: {
                node: 'current',
                browsers: ['last 4 versions', 'Firefox ESR'],
            },
        }],
    ],
};
