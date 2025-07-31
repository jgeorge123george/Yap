# Use JDK 24 slim image to run the app
FROM openjdk:24-slim

WORKDIR /app

# Copy the JAR built on the host
COPY build/libs/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose Spring Boot port
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
