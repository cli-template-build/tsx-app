FROM node
 
# http-server 不变动也可以利用缓存
WORKDIR /code
 
ADD package.json /code
RUN npm install
 
ADD . /code
RUN npm run build