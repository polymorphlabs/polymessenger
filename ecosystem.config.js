// This config file is meant to be used with PM2, it's not compulsory though
// Eg. pm2 start ecosystem.config.js

const dotenv = require("dotenv").load("../.env");

module.exports = {
    apps: [
        {
            name: 'polymessenger',
            script: './index.js',
            env: {
                NODE_ENV: 'development',
                ...process.env
            },
            env_production: {
                NODE_ENV: 'production'
            }
        },
    ],

    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
