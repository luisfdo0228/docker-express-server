docker rmi $(docker images -a -q) -f

docker build -t "api-server" .

docker-compose up