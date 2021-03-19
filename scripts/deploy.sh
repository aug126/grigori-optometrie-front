#!/bin/bash

## Infos
## DESTINATION_PATH should exist
## unzip should be installed on the server

SERVER_USER='ubuntu'
SERVER_IP='193.70.43.55'
DESTINATION_PATH='~/www/grigori/optometrie-angular/'

## Local
# npm run assets:generate
ng build --prod
cd dist/optometrie-angular
zip grigori-optometrie.zip * -r 

## Server
scp grigori-optometrie.zip $SERVER_USER@$SERVER_IP:$DESTINATION_PATH
ssh $SERVER_USER@$SERVER_IP unzip -o $DESTINATION_PATH'grigori-optometrie.zip' -d $DESTINATION_PATH
