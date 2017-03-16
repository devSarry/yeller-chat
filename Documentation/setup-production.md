# Production Setup
Being that this is a node application setup is a little different from the usual laravel deployment. That being said it's still easy enough. There's a great guide that I used on [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04). The basic steps are as follows.

### Setup Overview
1. pull the repo `git clone https://github.com/dopyoman/yeller-chat`
2. npm install the packages.
3. make sure pm2 is installed `sudo npm install -g pm2`
4. use pm2 to run app (it will auto restart if crashes)
5. setup nginx reverse proxy

### Notes
Mose these steps are pretty straight forward, pm2 is the only thing new here. From the guide
> pm2 is a process manager for Node.js applications. PM2 provides an easy way to manage and daemonize applications (run them in the background as a service).

Setting up nginx is also pretty straight forward since the node application is already running a server we basically just have to route all requests to the local server running on the machine. A *reverse proxy* 

Note the `proxy_pass` address.

```
server {
    listen 80;
    listen 443 ssl http2;
    server_name chat.makkaraperuna.app;

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        proxy_pass http://localhost:3030;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/yeller.app-error.log error;

    sendfile off;

    client_max_body_size 100m;

    location ~ /\.ht {
        deny all;
    }

    ssl_certificate     /etc/nginx/ssl/chat.makkaraperunacom.crt;
    ssl_certificate_key /etc/nginx/ssl/chat.makkaraperuna.com.key;
}
```