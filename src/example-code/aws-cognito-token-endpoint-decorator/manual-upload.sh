#!/bin/env bash

rm -f nhs-login-decorator.zip
rm -rf node_modules
yarn install --production 
zip -r nhs-login-decorator.zip .
aws lambda update-function-code --function-name <YOUR-FUNCTION-NAME-HERE> --zip-file fileb://./nhs-login-decorator.zip