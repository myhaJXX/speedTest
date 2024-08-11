/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    output: 'export',
    basePath: "/speedTest",
    webpack: ((config, options)=>{
        config.resolve.alias = {
            ...config.resolve.alias,
            '@styles': path.resolve(__dirname, 'app/static/styles'), //styles like variables and mixins
            '@imgs': path.resolve(__dirname, 'app/static/imgs'), //static images
            '@jsStatic': path.resolve(__dirname, 'app/static/js'), //constant info which uses in SPA
        }
        return config
    })
};

module.exports = nextConfig;
