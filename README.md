<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

```bash

sudo apt update
sudo apt install erlang -y
erl -version

echo "deb https://dl.bintray.com/rabbitmq/debian focal main" | sudo tee /etc/apt/sources.list.d/bintray.rabbitmq.list

wget -O - https://dl.bintray.com/rabbitmq/keys/rabbitmq.asc | sudo apt-key add -


sudo apt update
sudo apt install rabbitmq-server -y


sudo systemctl start rabbitmq-server

sudo systemctl enable rabbitmq-server
sudo systemctl status rabbitmq-server
sudo rabbitmq-plugins enable rabbitmq_management

sudo rabbitmqctl add_user myuser mypassword
sudo rabbitmqctl set_user_tags myuser administrator
sudo rabbitmqctl set_permissions -p / myuser ".*" ".*" ".*"


npm install @nestjs/microservices amqplib bull @nestjs/bull


```

http://localhost:15672/
guest / guest
riyan / riyan


