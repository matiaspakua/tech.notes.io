# Spring Framework Notes

<style>
  .back-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>

<button class="back-button" onclick="window.location.href='https://matiaspakua.github.io/tech.notes.io'">All notes</button>

---

## Example project: Card Cash Application Spring training

[https://github.com/matiaspakua/cashCardSpringBoot](https://github.com/matiaspakua/cashCardSpringBoot)


## Introduction to Spring

Spring is an open-source application framework for Java. It provides comprehensive infrastructure support for developing Java applications, simplifying the development process and increasing productivity. Spring is based on the principle of inversion of control (IoC), which means that the framework takes control of the flow of the application, leaving developers to focus on writing business logic.

Spring provides a wide range of modules to address various aspects of modern enterprise application development such as database connectivity, transaction management, web applications, security, messaging, and much more. It also provides integration with other popular technologies such as Hibernate, JPA, and Struts.

## Inversion of Control (IoC)

The principle of Inversion of Control (IoC), also known as Dependency Injection, originated in the field of software engineering as part of the Inversion of Control design principle. This principle states that the control flow of a program is inverted or reversed compared to traditional programming, where the program explicitly calls and controls the flow of libraries and frameworks. Instead, in IoC, the flow of control is reversed, and the framework or container controls the flow by calling the program's code through callbacks, interfaces, or annotations.

The IoC principle was first introduced by Martin Fowler and has since become a widely adopted design pattern in software engineering. The idea behind IoC is to remove the tight coupling between different components of a software system by allowing them to interact through interfaces instead of concrete implementations. This allows for greater flexibility, scalability, and maintainability in software systems. The Spring Framework is a popular implementation of the IoC principle in Java

## IoC and Dependency Injection (DI)

Dependency Injection (DI) is a design pattern that allows objects to have their dependencies (i.e., objects they depend on) injected or provided to them by a third party, rather than creating and managing those dependencies themselves.

In other words, DI is a technique for achieving Inversion of Control (IoC) in software development, where the control of object creation and management is delegated to a separate object or framework. DI helps in achieving separation of concerns by ensuring that an object's dependencies are provided externally and thus promoting modularity, testability, and flexibility in the application.

Instead of creating a dependency object inside a class, the dependency is provided to the class through a constructor or a setter method. This makes the code more modular and less coupled, as the dependency can be easily swapped out for a different implementation or mock object during testing.


## Spring Architecture 

The Spring Framework architecture follows a layered architecture and consists of the following modules:

1. **Core Container**: This module provides the fundamental parts of the framework, including the IoC container and the Dependency Injection(DI) features.

2. **AOP (Aspect Oriented Programming)**: This module provides support for implementing cross-cutting concerns.

3. **Data Access/Integration**: This module provides support for JDBC, ORM, OXM, JMS, and Transaction Management.

4. **Web**: This module provides support for web applications, including Spring MVC and WebSocket.

5. **Test**: This module provides support for testing Spring applications with JUnit or TestNG.

6. **Messaging**: This module provides support for messaging protocols such as STOMP, MQTT, and WebSocket.

7. **Security**: This module provides support for securing Spring applications.

8. **Spring Boot**: This module provides a set of tools for developing and deploying Spring applications quickly and easily.

![Spring Framework layers](../../images/spring-overview.png)

## Spring vs SpringBoot

### Spring

Spring is a comprehensive framework that provides various modules for building different types of applications. It's like having a giant toolbox with every tool you could possibly need to build anything you want. As we build our Family Cash Card API we will use Spring MVC for the web application, Spring Data for data access, and Spring Security for authentication and authorization.

This versatility comes at a cost. Setting up a Spring application requires a lot of configuration, and developers need to manually configure various components of the framework to get an application up and running.

### SpringBoot

Spring Boot is like a more opinionated version of Spring. It comes with a many pre-configured settings and dependencies that are commonly used in Spring applications. This makes it really easy to get started quickly, without having to worry about setting up everything from scratch. Plus, Spring Boot comes with an embedded web server, so you can easily create and deploy web applications without needing an external server.

## Spring’s Inversion of Control Container

Spring Boot takes advantage of Spring Core’s Inversion of Control (IoC) container. Spring Boot allows you to configure how and when dependencies are provided to your application at runtime. This puts you in control of how your application operates in different scenarios.

![](../../images/spring-ioc-container.png)

For example, you might want to use a different database for local development than for your live, public-facing application. Your application code shouldn't care about this distinction; if it did, you’d have to hard-code every possible scenario into your application logic. Instead, Spring Boot allows you to provide an external configuration that specifies how and when such dependencies are used.

## REST, CRUD, and HTTP

Let’s start with a concise definition of REST: Representational State Transfer. In a RESTful system, data objects are called Resource Representations. The purpose of a RESTful API (Application Programming Interface) is to manage the state of these Resources.

Said another way, you can think of “state” being “value” and “Resource Representation” being an “object” or "thing". Therefore, REST is just a way to manage the values of things. Those things might be accessed via an API, and are often stored in a persistent data store, such as a database.

![CRUP-REST-API](../../images/crud-rest-api.png)

A frequently mentioned concept when speaking about REST is CRUD. 

CRUD stands for “Create, Read, Update, and Delete”. These are the four basic operations that can be performed on objects in a data store. We’ll learn that REST has specific guidelines for implementing each one.

Another common concept associated with REST is the Hypertext Transfer Protocol. In HTTP, a caller sends a Request to a URI. A web server receives the request, and routes it to a request handler. The handler creates a Response, which is then sent back to the caller.

The components of the Request and Response are:

Request

```bash
Method (also called Verb)
URI (also called Endpoint)
Body
```

Response

```bash
Status Code
Body
```

The power of REST lies in the way it references a Resource, and what the Request and Response look like for each CRUD operation. Let’s take a look at what our API will look like when we're done with this course:

 * For CREATE: use HTTP method POST.
 * For READ: use HTTP method GET.
 * For UPDATE: use HTTP method PUT.
 * For DELETE: use HTTP method DELETE.


## REST in SpringBoot

### Spring Annotations and Component Scan

One of the main things Spring does is to configure and instantiate objects. These objects are called Spring Beans, and are usually created by Spring (as opposed to using the Java new keyword). You can direct Spring to create Beans in several ways.

This happens at application startup. The Bean is stored in Spring’s IoC container. From here, the bean can be injected into any code that requests it.

### Spring Web Controllers

In Spring Web, Requests are handled by Controllers. 

```java
@RestController
	public class CashCardController {
}

```

That’s all it takes to tell Spring: “create a REST Controller”. The Controller gets injected into Spring Web, which routes API requests (handled by the Controller) to the correct method.

A Controller method can be designated a handler method, to be called when a request that the method knows how to handle (called a “matching request”) is received.


## API Contracts & JSON

The software industry has adopted several patterns for capturing agreed upon API behavior in documentation and code. These agreements are often called "contracts". Two examples include Consumer Driven Contracts and Provider Driven Contracts. 

We define an API contract as a formal agreement between a software provider and a consumer that abstractly communicates how to interact with each other. This contract defines how API providers and consumers interact, what data exchanges looks like, and how to communicate success and failure cases.

The provider and consumers do not have to share the same programming language, only the same API contracts. 

 ```bash
 
Request
  URI: /cashcards/{id}
  HTTP Verb: GET
  Body: None

Response:
  HTTP Status:
    200 OK if the user is authorized and the Cash Card was successfully retrieved
    401 UNAUTHORIZED if the user is unauthenticated or unauthorized
    404 NOT FOUND if the user is authenticated and authorized but the Cash Card cannot be found
  Response Body Type: JSON
  Example Response Body:
    {
      "id": 99,
      "amount": 123.45
    }
```

---
## Java Records

Commonly, we write classes to simply hold data, such as database results, query results, or information from a service.

In many cases, this data is immutable, since immutability ensures the validity of the data without synchronization. 

To accomplish this, we create data classes with the following:

 * private, final field for each piece of data
 * getter for each field
 * public constructor with a corresponding argument for each field
 * equals method that returns true for objects of the same class when all fields match
 * hashCode method that returns the same value when all fields match
 * toString method that includes the name of the class and the name of each field and its corresponding value

As of JDK 14, we can replace our repetitious data classes with records. Records are immutable data classes that require only the type and name of fields.

The equals, hashCode, and toString methods, as well as the private, final fields and public constructor, are generated by the Java compiler.

## References

 - [Official Spring Framework website](https://spring.io/why-spring)
 - [Spring Introduction docs](https://docs.spring.io/spring-framework/docs/3.0.x/spring-framework-reference/html/overview.html)
 - [Spring: Framework in Depth](https://www.linkedin.com/learning/spring-framework-in-depth-2)
 - [Extending, Securing, and Dockerizing Spring Boot Microservices](https://www.linkedin.com/learning/extending-securing-and-dockerizing-spring-boot-microservices/elevate-a-microservice)
 - [Creating Your First Spring Boot Microservice](https://www.linkedin.com/learning/creating-your-first-spring-boot-microservice/build-a-microservice-with-spring-boot)
 - [Spring: Spring MVC](https://www.linkedin.com/learning/spring-spring-mvc-2/spring-mvc-for-robust-applications)
 - [Spring: Test-Driven Development with JUnit](https://www.linkedin.com/learning/spring-test-driven-development-with-junit/welcome)
 - [Curso de Java Spring](https://platzi.com/cursos/java-spring/)
 - [ Spring: Spring Data 2 ](https://www.linkedin.com/learning/spring-spring-data-2-2017/welcome)
 - [Java Records](https://www.baeldung.com/java-record-keyword)
