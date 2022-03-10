#!/bin/sh
set -e

SEEDED_FILE=.seeded

wait-for-it.sh db:5432 -t 15 -- echo "Database ready!"

# Prepare the application
echo "Running migrations..."
npx knex migrate:latest

if [ ! -f $SEEDED_FILE ]; then
  echo "Seeding application..."
  npx knex seed:run

  touch $SEEDED_FILE
fi

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
