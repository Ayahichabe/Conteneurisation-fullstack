FROM openjdk:17-jdk-alpine AS builder
WORKDIR /app
COPY pom.xml mvnw ./
COPY .mvn .mvn/
RUN ./mvnw dependency:resolve
COPY src ./src
RUN ./mvnw package -DskipTests
FROM openjdk:17-slim
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
WORKDIR /app
COPY --from=builder /app/target/ems-backend-0.0.1-SNAPSHOT.jar .
USER appuser
EXPOSE 8080
CMD ["java", "-jar", "ems-backend-0.0.1-SNAPSHOT.jar"]
