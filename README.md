# lift-app

Built with Angular 2 and RethinkDB's Horizon.

- Set up around the docker compose information at: [http://horizon.io/docs/docker/](http://horizon.io/docs/docker/)
- Angular 2 dockerized based on tutorial at: [https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose](https://scotch.io/tutorials/create-a-mean-app-with-angular-2-and-docker-compose)

## Development

### With Hot Reload

1. Start Horizon and RethinkDB with: `docker-compose up`
2. From the <code>lift-client</code> folder, run the Client with: `npm start`
3. App at `localhost:4200`

### For the Full Package

1. From the <code>lift-client</code> folder, build the Client with: `npm run build`
2. Remove any files from the base level <code>/dist</code> folder.
3. Copy the files from the <code>lift-client/dist</code> folder to the base level <code>/dist</code> folder.
4. Start all Services with: `docker-compose up`
5. App at `localhost:8181`

## Deploy

### AWS

1. Assumed EC2 instance with the proper security settings.
2. `git clone` or `git pull` for latest code.
3. In the `lift-app` folder, start daemonized service with `docker-compose -f docker-compose.yml -f docker-compose.aws.yml up -d`
