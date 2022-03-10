#!/bin/sh
set -e

# set secrets from AWS SecretsManager if $SECRETS exist
if [ ! -z "$SECRETS" ]
then
  export $(echo $SECRETS | jq -j "to_entries|map(\"\(.key)=\(.value|tostring) \")|.[]")
fi

env

# Run migrations
npx knex migrate:latest

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
