FROM node:5.11.0-slim
EXPOSE 8000
WORKDIR /app
COPY . /app/
RUN npm install -g nodemon
RUN npm --unsafe-perm install
CMD ["npm" , "start"]


