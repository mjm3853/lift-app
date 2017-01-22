# lift-app

Built with Angular 2 and RethinkDB's Horizon.

- Set up around the docker compose information at: [http://horizon.io/docs/docker/](http://horizon.io/docs/docker/)
- Angular 2 dockerized based on tutorial at: [https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose](https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose)

## Development

### With Hot Reload

1. Start Horizon and RethinkDB with: `docker-compose up`
2. From the <code>lift-client</code> folder, run the Client with: `npm start`

### For the Full Package

1. Build the latest Client with: `docker-compose -f docker-compose.yml -f docker-compose.pkg.yml build`
2. Start all Services with: `docker-compose -f docker-compose.yml -f docker-compose.pkg.yml up`
