# Wix task
The ``` Wix task ``` is a API Server! 

The application is built according to compliance with the [system requirements]().

# Rest API 

| Methods	| Urls	          | Actions
| --------- | ----------------| ----------------------------------------- |
| POST      | /tickets?from={from}&to={to}}         | xxx
| POST      | /tickets?search={search}         | zzzz
| GET       | /tickets/{title}        | yyy


## Project Structure
```bash

```

## Database
The system uses a json file\mysql\sqlite database which stores tickets with table structure in : ```data.json```

## Local Installation
#### Runnning locally as standalone app. 

\* *Environment variables are not required*, application can run with predefined defaults
```sh
$ cd wix-api
$ npm install
$ npm run start
```

 #### Runnning locally as production simulation 

- Using docker from the application folder, run ```docker-compose build``` and ```docker-compose up```

![Docker snapshot](image.png)

## Useful docs

[title](url)



