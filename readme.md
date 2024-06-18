- Create local DBs:
```bash
NODE_ENV=development npx sequelize-cli db:create
NODE_ENV=test npx sequelize-cli db:create
```

- run DB migrations:
```bash
NODE_ENV=development npx sequelize-cli db:migrate
NODE_ENV=test npx sequelize-cli db:migrate
```

- run data migrations
```bash
NODE_ENV=development npx sequelize-cli db:seed:all
```
 NOTE: don't run seed for test env