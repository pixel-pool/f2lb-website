#!/bin/bash

git pull
yarn build
sudo rm -rf /var/www/f2lb.info/* && sudo cp -r build/* /var/www/f2lb.info/
