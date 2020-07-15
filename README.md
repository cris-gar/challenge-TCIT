# Challenge TCIT

This project creates this implemented in docker and creates an api in Nodejs connected to Postgres and as front Reactjs

## Create Network

The project uses an external network called "interview", which is created with the following command:

### ` docker network create interview`

## Configure file .ENV

This file contains the data to create the postgres bdd as your username and password and which are also passed to Node to connect with the


## Running project

Finally, to execute the project, the commands must be executed:

### `docker-compose --build`
### `docker-compose up -d`

The backend Api runs on port 9000, while the front runs on port 3000

 