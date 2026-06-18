FROM node:20-alpine

WORKDIR /app

ARG VITE_API_URL=http://localhost:5000/api
ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 4173

USER node

CMD ["npm", "exec", "vite", "--", "preview", "--host", "0.0.0.0"]
