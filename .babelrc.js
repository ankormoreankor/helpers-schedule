module.exports = api => {
    const env = api.env();

    api.cache.never();

    const plugins = ['@babel/proposal-class-properties'];

    if (env === 'development') {}

    return {
        presets: [],
        plugins,
    };
};
