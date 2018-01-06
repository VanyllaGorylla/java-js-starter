# JAVA-JS-STARTER
## Description
The main goal of this project is to provide proper and easy to use skeleton for spring-boot and javascript application. 
I've decided to use my [My react generator](https://www.npmjs.com/package/generator-react-go) as frontend, but is no matter which generator you want to use, you can switch to whatever you like. 

## How it works
At the very beggining, maven build frontend part. Webpack creates **dist** folder which holds an application. Further, during building backend, *maven* copies files from frontend **dist** and puts them into **resources/static** folder. *Spring-boot* serves them from there.
