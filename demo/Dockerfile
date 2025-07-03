FROM openjdk:24-slim

WORKDIR /app

COPY build/libs/demo-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
