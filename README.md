The application was created using: React, Node.js, Express, PostgreSQL (hosted on ElephantSQL, powered by AWS).


To migrate and seed the database, do:
npx knex migrate:latest
npx knex seed:run