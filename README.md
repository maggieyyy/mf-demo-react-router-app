# mf-demo-react-router-app
测试APIPark插件系统的demo项目

## 部署

``` 
npm install
npm run build
``` 

## 本地运行基座项目，配置插件，并启用Nginx

```
server {
        listen       5050;
        server_name  localhost;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;

        location /plugin-frontend/remote/ {
            alias ${path}/react-router-app/dist/assets/;
            # 使用 rewrite 去除 ?import 查询参数
            rewrite ^/frontend-plugin/remote/(.*)\?import$ /frontend-plugin/remote/$1 break;
            index apipark.js;

            # 添加 CORS 头信息
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
        }

        location / {
            proxy_pass http://localhost:5000;
            proxy_set_header Host $proxy_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    ...
    }
```