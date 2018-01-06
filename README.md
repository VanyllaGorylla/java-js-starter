# JAVA-JS-STARTER
## Description
The main goal of this project is to provide proper and easy to use skeleton for spring-boot and javascript application. 
I've decided to use my [My react generator](https://www.npmjs.com/package/generator-react-go) as frontend, but is no matter which generator you want to use, you can switch to whatever you like. 

Application is based on **Spring Boot 1.5.9** and **React 16**.

## How it works
At the very beggining, maven build frontend part. Webpack creates **dist** folder which holds an application. Further, during building backend, *maven* copies files from frontend **dist** folder and puts them into **resources/static** folder. *Spring-boot* serves them from there.

## How to run it
Clone the code and then put into console:
```sh
mvn clean package -e
```
This will build the whole application.

To start it put:
```sh
java -jar backend/target/backend-0.0.1.jar
```

Now you can access application via web browser using post 8080: [http://localhost:8080/](http://localhost:8080/)

