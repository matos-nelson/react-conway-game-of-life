# pull official base image
FROM node as build

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
RUN npm install --silent

COPY . .

# build for production
RUN npm run build

# prepare production image
FROM nginx:alpine
COPY --from=build /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]