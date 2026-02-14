# DVD-Shop Website

A simple DVD shop website using nestjs and react

Node version: 24.13.1

## API Setup

Install nestjs CLI

```bash
npm i -g @nestjs/cli
```

Install dependencies

```bash
cd api
npm install
```

Run the development server

```bash
cd api
npm run start:dev
```

The default frontend url is http://localhost:3000
It can be configured in the .env file with the FRONTEND_URL variable

The default API port is 3200
To configure it, create a .env file in the api directory and set the PORT environment variable
(refer to .env.template for an example)

## API Documentation

Access the API documentation at http://localhost:3200/api

## Website Setup

Install dependencies

```bash
cd app
npm install
```

Run the development server

```bash
cd app
npm run dev
```

To generate API types after changes in API, run the following command from the app directory

```bash
npm run generate-api
```

The default API URL is http://localhost:3200
To configure it, create a .env file in the app directory and set the NEXT_PUBLIC_API_URL environment variable
(refer to .env.template for an example)
