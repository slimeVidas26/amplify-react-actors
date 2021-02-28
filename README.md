# Creating React + GraphQL Serverless Web application using AWS Amplify

[https://towardsdatascience.com/creating-react-graphql-serverless-web-application-using-aws-amplify-40e56f25796b]

reate react application
Add authentication
Add GraphQL api
Deploy and host on Amplify

## Create react application app

npx create-react-app amplify-react-basic
cd amplify-react-basic
npm start

## connect to git

git init
git remote add origin [https://github.com/slimeVidas26/amplify-react-sample.git]
git push -u origin master

## Install and configure Amplify CLI

npm install -g @aws-amplify/cli
amplify configure

## add aws-amplify to our react application

npm install aws-amplify @aws-amplify/ui-react
amplify init

## Add Authentication

amplify add auth
amplify push or amplify push --y

## Add GraphQL API

npm install @material-ui/core
amplify add api
amplify push

## Deploy and host on Amplify

amplify add hosting
amplify publish

## clone

git clone [https://github.com/slimeVidas26/amplify-react-basic.git] amplify-react-actors
npm install
git  add commit push...
amplify init
