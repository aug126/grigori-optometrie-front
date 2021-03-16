#!/bin/bash

SERVER_USER='augustin'
SERVER_IP='142.93.238.8'
DESTINATION_PATH='~/www/grigori/optometrie-angular/'

# npm run assets:generate
ng build --prod
cd dist/optometrie-angular
zip grigori-optometrie.zip * -r 
scp grigori-optometrie.zip $SERVER_USER@$SERVER_IP:$DESTINATION_PATH
ssh $SERVER_USER@$SERVER_IP unzip -o $DESTINATION_PATH'grigori-optometrie.zip' -d $DESTINATION_PATH
