#!/bin/bash

# Baixa a imagem
docker pull mongo

# Remove o container, se existir
docker stop node-ecomerce-horti
docker container rm node-ecomerce-horti

# Gera o container
docker run --name node-ecomerce-horti -p 27017:27017 -d mongo
