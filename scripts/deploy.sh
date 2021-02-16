#!/bin/bash

# npm run assets:generate
ng build --prod
cd dist/optometrie-angular
zip grigori-optometrie.zip * -r 
scp -P 18 grigori-optometrie.zip augustin@92.222.70.14:/var/www/grigori-optometrie
ssh -p 18 augustin@92.222.70.14 unzip -o /var/www/grigori-optometrie/grigori-optometrie.zip -d /var/www/grigori-optometrie/