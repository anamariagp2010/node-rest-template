# Node.js API skeleton

## Bootstrapping

- Read the rest of this README.md
- Follow the setup section
- Run the tests
- Start the server
- Go to http://localhost:3000/api/things

After all is setup & running, feel free to remove the local git repository and initialize a new one, rename databases,
and remove the sample source code.

## Stack

- koa2 & friends
- Objection.js
- knex
- jest
- PostgreSQL

## Setup

- Create an `.env` file based on `.env.sample`
- Install expected node version (.nvmrc)
- Install dependencies `npm install`
- Create the database `createdb <env.DATABASE>_development` where <env.DATABASE> is the DATABASE key in the .env file
- Run migrations `npx knex migrate:latest`
- Run seeds `npx knex seed:run`

# Usage

## Scripts

- Start server on dev: `npm run dev`
- Run linter: `npm run lint`
- Run migrations: `npx knex migrate:latest`
- Rollback migration: `npx knex migrate:rollback`
- Make migration: `npx knex migrate:make migration_name`
- Make seed: `npx knex seed:make seed_name`
- Run seeds: `npx knex seed:run`

## Running tests

- Create test database `createdb <env.DATABASE>_test` where <env.DATABASE> is the DATABASE key in the .env file
- Migrate test database `npx knex migrate:latest --env test`
- Run tests: `npm run test`
- Watch tests: `npm run test-watch`

## Specific Documentation

- [Authentication](lib/authentication.md)
- [Serializer](lib/serializer.md)
- [Pagination](lib/middlewares.md)
