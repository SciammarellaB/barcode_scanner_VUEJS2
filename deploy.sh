npm run build
cd dist
git init
git add -A
git commit -m 'Deploy'
git push -f git@github.com:SciammarellaBrenno/barcode_scanner_VUEJS2.git master:deploy
cd ..