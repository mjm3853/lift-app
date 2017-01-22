# lift-app

Built with Angular 2 and RethinkDB's Horizon.

- Set up around the docker compose information at: [http://horizon.io/docs/docker/](http://horizon.io/docs/docker/)
- Angular 2 dockerized based on tutorial at: [https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose](https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose)

## Development

Use these steps to leverage Angular 2's hot reload during development:

1. Start Horizon and RethinkDB with: `docker-compose up`
2. From the <code>lift-client</code> folder, start the `npm start`

## Production

1. docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
