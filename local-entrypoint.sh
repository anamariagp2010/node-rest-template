#!/bin/sh
set -e

/app/wait-for-it.sh db:27017 -t 15 -- echo "Database ready!"

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
