FROM node:18
RUN mkdir -p /home/app 
COPY . /home/app
EXPOSE 4000
CMD ["ts-node-dev --respawn --transpile-only", "/home/app/src/index.ts"]