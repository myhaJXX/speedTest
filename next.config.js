/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    webpack: ((config, options)=>{
        config.resolve.alias = {
            ...config.resolve.alias,
            '@styles': path.resolve(__dirname, 'app/static/styles'),
            '@imgs': path.resolve(__dirname, 'app/static/imgs'),
            '@jsStatic': path.resolve(__dirname, 'app/static/js'),
        }
        return config
    })
};

module.exports = nextConfig;
