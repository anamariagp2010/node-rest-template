# Node.js API skeleton

## Bootstrapping

- Read the rest of this README.md
- Follow the setup section
- Run the tests
- Start the server

After all is setup & running, feel free to remove the local git repository and initialize a new one, rename databases,
and remove the sample source code.

## Stack

- koa2 & friends
- Mongoose
- jest
- MongoDB

## Setup

- Create an `.env` file based on `.env.sample`
- Install expected node version (.nvmrc)
- Install dependencies `yarn install`

# Usage

## Scripts

## Hygen code generators
- To generate an entity scaffold: `npx hygen generate scaffold`

- Start server on dev: `npm run dev`
- Run linter: `yarn run lint`

## Running tests

- Run tests: `yarn run test`
- Watch tests: `yarn run test-watch`

## Specific Documentation

- [Authentication](lib/authentication.md)
- [Serializer](lib/serializer.md)
- [Pagination](lib/middlewares.md)
