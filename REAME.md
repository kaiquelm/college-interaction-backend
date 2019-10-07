docker run \
    --name postgres \
    -e POSTGRES_USER=kaique \
    -e POSTGRES_PASSWORD=senhateste \
    -e POSTGRES_DB=collegeinteraction \
    -p 5432:5432 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080
    --link postgres:postgres \
    -d \
    adminer

docke run \
    --name mongodb \
    -p 27017:27017
    -e MONGO_INITDB_ROOT_USERNAME=kaique
    -e MONGO_INITDB_ROOT_PASSWORD=senhateste
    -d
    mongodb

docker run \
    --name mongoclient \
    -p 3000:3000
    --link mongodb:mongodb
    -d
    mongoclient/mongoclient

docker exec -it mongo
    mongo --host localhost -u kaique -p senhateste --authenticationDatabase admin \
    --eval "db.getSiblingDB('professores').createUser({user: 'raul', pwd:'senhateste2', roles: [{role:'readWrite', db: 'professores'}]})"