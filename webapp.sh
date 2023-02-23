#!/bin/bash

sudo yum update -y

export DATABASEHOST=${DATABASEHOST}
export DATABASEUSER=${DATABASEUSER}
export DATABASEPASSWORD=${DATABASEPASSWORD}
export DATABASE=${DATABASE}
export PORT=${PORT}
export DBPORT=${DBPORT}

sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
sudo yum install -y nodejs

sudo yum install mariadb mariadb-server -y
sudo systemctl start mariadb
sudo mysqladmin -u ${DATABASEUSER} password ${DATABASEPASSWORD}
mysqladmin -u ${DATABASEUSER} --password=${DATABASEPASSWORD} --host=${DATABASEHOST} --port=${DBPORT} create ${DATABASE}
sudo systemctl enable mariadb

unzip webapp.zip -d webapp
cd /home/ec2-user/webapp
npm i




sudo cp ./webapp.service /etc/systemd/system/

sudo systemctl daemon-reload
sudo systemctl enable webapp.service






# Install nginx
sudo amazon-linux-extras list | grep nginx
sudo amazon-linux-extras enable nginx1
sudo yum clean metadata
sudo yum -y install nginx
sudo systemctl enable nginx
sudo cp nginx.conf /etc/nginx/
sudo systemctl restart nginx
sudo systemctl reload nginx