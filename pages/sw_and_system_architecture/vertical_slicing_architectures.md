# Software Architecture. Vertical Slicing Architectures

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
1. [Implementation considerations](#implementation-considerations)
1. [References](#references)

## Introduction
![](../../images/vertical_slicing.jpg)

- **Vertical slicing**: A technique to group the code by use cases or business capabilities, instead of technical layers. It allows more freedom and independence for each slice, and reduces coupling and complexity. It can be combined with concentric architectures such as onion or hexagonal.
- **Modular monolith**: An alternative to microservices that consists of breaking a large monolithic codebase into smaller modules that are loosely coupled and have clear boundaries. It is easier to change and refactor than microservices, and avoids the challenges of distributed systems.
- **Finding module boundaries**: A challenging task that requires balancing local and global complexity, aligning with business domains and teams, and avoiding scope creep and domain model dilution. The author suggests some tactics such as grouping by business capabilities, not concepts, and using domain-driven design principles.
- **Decoupling modules**: A necessary step to ensure the modules are cohesive and independent. The author recommends some strategies such as cutting domain entities at the boundary, using dependency inversion, applying event-driven architecture, and using feature toggles.
- **How to decouple domain entities**: The author explains that the first step is to **unlink the object links** between the entities and **keep the foreign keys** in the database. The second step is to **identify the owner of data** based on who changes it. The third step is to **create an internal API** for each module and **use data decoupling objects** to communicate with other modules.
- **How to deal with cyclic dependencies**: The author suggests to **question the reasons** for having cyclic dependencies and to **consider alternatives** such as extracting common modules, using events, applying dependency inversion, creating a facade API, or merging the modules back.
- **How to test a modular monolith**: The author recommends to use **integration tests** as the default choice and to test the **whole story** of each use case. The author also shows a **testing pyramid** for microservices and compares it with a **testing honeycomb** for modular monoliths.
- **How to release a modular monolith**: The author acknowledges that there is **some friction** in releasing a modular monolith with multiple teams involved, but also shares an example of a team that managed to release it **every week** by optimizing their pipeline. The author advises to **invest in automation** and to **explore refactoring** opportunities.

## Implementation considerations

- **How to decouple domain entities**: The author explains that the first step is to **replace the object references** between the entities with **primitive types** that represent the foreign keys in the database. For example, instead of having a `Customer` object in an `Order` object, you would have a `customerId` field of type `Long`. The second step is to **assign the responsibility of data** based on who modifies it. For example, if the `Order` module changes the `status` of an order, then the `Order` entity should own the `status` field. The third step is to **define an interface** for each module and **use DTOs (Data Transfer Objects)** to communicate with other modules. For example, if the `Customer` module needs to access some data from the `Order` module, it should use the `OrderService` interface and the `OrderDTO` class.
    
- **How to deal with cyclic dependencies**: The author suggests to **reconsider the reasons** for having cyclic dependencies and to **explore alternatives** such as extracting common modules, using events, applying dependency inversion, creating a facade API, or merging the modules back. For example, if the `Order` module depends on the `Customer` module and vice versa, you could extract a `Payment` module that both modules depend on, or use an event bus to publish and subscribe to events between the modules, or invert the dependencies by using abstract interfaces, or create a `CustomerOrderService` that acts as a facade for both modules, or simply combine the `Order` and `Customer` modules into one.
## References

- [Victor Rentea](https://www.youtube.com/live/H7HWOlANX78?feature=share)