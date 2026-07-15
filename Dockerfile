FROM node:22

WORKDIR /app
COPY server.js .
COPY index.html .
COPY images ./images
COPY node_modules ./node_modules

EXPOSE 3000
CMD [ "node","server.js" ]