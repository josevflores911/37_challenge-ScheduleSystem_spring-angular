FROM openjdk:23-jdk-slim

WORKDIR /app

COPY target/*.jar /app/scheduler.jar

EXPOSE 8080

CMD ["java","-jar","scheduler.jar"]
