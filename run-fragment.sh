#!/bin/bash

# Exit on errors
set -e

ng build --deploy-url="/__wf/fragment/" --base-href="/fragment/" --configuration production fragment

SPA_DIR=./dist/fragment/browser
ASSETS_DIR="$SPA_DIR/__wf/fragment"

# 1. Create the /__wf/fragment/ path
mkdir -p "$ASSETS_DIR"

# 2. Move .css and .js files into it
find "$SPA_DIR" -maxdepth 1 -type f \( -iname "*.css" -o -iname "*.js" \) -exec mv {} "$ASSETS_DIR" \;

# 4. Create NGINX config
cat > "$SPA_DIR/nginx.conf" <<EOF
events {}
http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        absolute_redirect off;
        listen 80;

        location = /fragment {
            return 301 /fragment/;
        }

        location /fragment/ {
            alias /usr/share/nginx/html/;
            index index.html;
            try_files \$uri \$uri/ /fragment/index.html;
        }

        location ~* \.(?:css|js|png|jpg|jpeg|gif|ico|svg|ttf|woff|woff2|json)$ {
            root /usr/share/nginx/html;
            expires 1d;
            access_log off;
            add_header Cache-Control "public";
        }
    }
}
EOF

# 5. Create Dockerfile
cat > "$SPA_DIR/Dockerfile" <<EOF
FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EOF

# 6. Build Docker image
docker build -t fragment-spa "$SPA_DIR"

# 7. Run container
# docker run -d --rm -p 1234:80 --name fragment-spa-container fragment-spa
docker ps -q --filter "name=fragment-spa-container" | grep -q . && docker stop fragment-spa-container; docker run -d --rm -p 4201:80 --name fragment-spa-container fragment-spa

echo "✅ SPA is running at: http://localhost:4201/fragment/"