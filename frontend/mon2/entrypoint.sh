#!/bin/sh

# Inject env vars into index.html (or another config file)
echo "Injecting VITE_BACKEND_URL: $VITE_BACKEND_URL"

# Replace placeholder in built index.html
envsubst '${VITE_BACKEND_URL}' < /usr/share/nginx/html/index.html > /usr/share/nginx/html/index.tmp.html
mv /usr/share/nginx/html/index.tmp.html /usr/share/nginx/html/index.html

exec "$@"
