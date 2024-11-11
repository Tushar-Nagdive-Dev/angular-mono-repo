echo "\n"
echo "create library"
ng build expense-lib

echo "\n"
echo "link dist"
cd dist/expense-lib
npm link

echo "\n"
echo "extract in expense mgmt"
cd ../../projects/expenses-mgmt
npm link expense-lib

echo "\n" 
echo "*****complete******"
# ng serve expenses-mgmt --port=4201
cd ../../
pwd
ng serve expenses-mgmt --ssl --ssl-key key.pem --ssl-cert cert.pem --port=4201
