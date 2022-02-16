module.exports = {
  apps: [
    {
      name: 'Tabby Moon',
      script: '/usr/local/bin/yarn',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '500M',
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '167.71.194.220',
      key: 'deploy.key',
      ref: 'origin/master',
      repo: 'git@github.com:ravenvn/tabby_moon_web.git',
      ssh_options: ['StrictHostKeyChecking=no'],
      path: '/var/www/tabbymoon',
      'post-deploy': 'pm2 restart ecosystem.config.js && pm2 save',
    },
  },
}
