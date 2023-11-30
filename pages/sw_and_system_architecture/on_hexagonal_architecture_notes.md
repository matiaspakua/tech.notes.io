# On Hexagonal Architecture notes

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

1. [Introduction](#introduction)
1. [References](#references)

## Introduction

Hexagonal Architecture, also known as<mark style="background: #FFF3A3A6;"> Ports and Adapters</mark> pattern, is a design pattern used in software application development. It aims to create loosely coupled application components that can be easily connected to their software environment by means of ports and adapters. This makes the system easy to maintain, adaptable for future changes and independent of any external agency.

In the example of a Java with Spring-based platform, here’s are some concepts to map to:

1. **Domain Model**: This is the core of your application, where the business logic resides. In a Java application, these would be your POJOs (Plain Old Java Objects) that define the entities and value objects.
    
2. **Ports**: These are interfaces that define the expected behavior of your application. In a Spring application, these could be annotated as `@Service` or `@Component`. There are two types of ports:
    
    - **Primary or Driving ports**: These are service interfaces that expose the use cases of your application. They’re “driven” by the application user (human or system).
    - **Secondary or Driven ports**: These are usually repository interfaces that the application drives to perform operations on external systems like databases.
3. **Adapters**: These are the implementations of your ports. They adapt the technology-specific code to your business use cases. In a Spring application, these could be your `@Controller` classes (for incoming requests) and `@Repository` or `@Service` classes (for outgoing requests).
    
4. **Services**: In a microservices architecture, each service could be a hexagon (i.e., it has its own ports and adapters). They communicate with each other through APIs.

  

![Example by VALENTINA CUPAĆ ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe5f9ca77-0fc5-4fd4-8b89-c2e43ffff9c2_3601x4442.jpeg)

Here’s a simple example in Java:

```java
// Primary Port
@Service
public interface OrderService {
    void placeOrder(Order order);
}

// Secondary Port
@Repository
public interface OrderRepository {
    void save(Order order);
}

// Primary Adapter
@Controller
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/orders")
    public void placeOrder(@RequestBody Order order) {
        orderService.placeOrder(order);
    }
}

// Secondary Adapter
@Service
public class JpaOrderRepository implements OrderRepository {
    // implementation details...
}
```

In this example, `OrderService` is a primary port, `OrderRepository` is a secondary port, `OrderController` is a primary adapter, and `JpaOrderRepository` is a secondary adapter. The `OrderController` and `JpaOrderRepository` adapt the incoming HTTP request and the outgoing JPA operations to the `OrderService` use case, respectively.

The key idea behind Hexagonal Architecture is to isolate the core logic of your application from the outside world (like UI, database, etc.). This allows you to independently develop, test, and evolve the core logic without being affected by changes to external components. It also makes your application more flexible and adaptable to future changes. For example, you can easily swap out a MySQL database for a NoSQL database without changing the core business logic. You just need to write a new adapter.

## References

 - [The original article](https://alistair.cockburn.us/hexagonal-architecture/)
 - [Hexagonal Architecture - Ports and Adapters](https://journal.optivem.com/p/hexagonal-architecture-ports-and-adapters)
 - [Webinar recap 🎥 Understanding Hexagonal Architecture: Ports and Adapters](https://shiftsync.tricentis.com/development-methodologies-47/webinar-recap-understanding-hexagonal-architecture-ports-and-adapters-513)