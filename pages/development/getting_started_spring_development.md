# Getting Started In Spring Development

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

## Introduction to Spring

The Spring framework is built and designed such that it provides <mark style="background: #FFF3A3A6;">comprehensive support</mark> for developing applications for the JVM, including abstractions for some of the most powerful and common enterprise systems integrations, specifically around common infrastructure. 

<mark style="background: #FFF3A3A6;">Spring essentially is designed to provide the plumbing</mark> for using these enterprise offerings and common components used in both internet and enterprise application development. This plumbing allows you to easily consume these offerings while focusing on your business logic, instead of the copy paste scaffolding code to use these integrations that many developers rely on. 

Spring is designed using solid Object Oriented Programming practices and its style promotes you to do the same thing when consuming the framework. Things like <mark style="background: #FFF3A3A6;">coding to an interface</mark>, instead of an implementation are paramount in Spring. 

Now, back to the plumbing idea, Spring promotes <mark style="background: #FFF3A3A6;">Don't Repeat Yourself or DRY principles</mark> by leveraging the powerful abstractions of the framework instead of rebuilding the scaffolding over and over again, you reduce your risk of copy paste errors, and instead focus on the actual needs of your application. 

**POJO or Plain old Java Object**. In Spring, this is any class file that contains both attributes and methods. And those methods are not just getters and setters. This is a common deviation for many Java developers who often concern the concept of POJO with Java Beans. In the Spring world we take the more correct definition of a POJO. 

**Java Beans**. These two are POJOs in practice, but they're only methods are accessor methods, often called getters and setters. This definition is heavily used when using EJBs, for instance. Spring Beans, however, are POJOs that are configured and managed by the application context. 

**DTOs, or Data Transfer Objects** are Java Beans with the specific purpose of moving state between logical layers of your application. There are times when you don't want to expose the details of your working classes and instead translate to a DTO, which often is written as an immutable object before setting the state data out of the logical layer. 

**Inversion of Control** is a central pattern to the Spring framework and, in fact, much of Spring is built around the central design pattern. It can be said that if you fully understand how Spring utilizes IoC, you understand Spring fully. Inversion of Control provides a mechanism for dependency injection, however, it's more than just dependency injection because with Spring's use of Inversion of Control, the framework itself controls all operations of the lifecycle of those dependencies, not just the injection. 

**The Application Context** <mark style="background: #FFF3A3A6;">wraps the Bean Factory</mark>, which is the Inversion of Control container itself. The Bean Factory serves the Beans during runtime of your application. Now we, as users and developers, never really interact with the IoC container itself. Instead we interact with its wrapper or the application context. There are several implementations of the application context itself.

One of the most powerful aspects of Spring Boot is that it provides <mark style="background: #FFF3A3A6;">auto-configuration</mark> of the application context so that you, as the developer, can leverage simple properties and conventions to configure the Beans loaded into the Bean Factory and used by the IoC container. 

More information in: [spring_framework_notes](spring_framework_notes.md)


# Spring DATA

# Repository Code

Link: [This repo is for the Linkedin Learning course: Spring: Spring Data 2](https://github.com/LinkedInLearning/spring-spring-data-2-2508603)

## Mission and modules

Hibernate eliminated manually mapping logical objects to physical databases, asynchronous JavaScript and XML. Also known as Ajax. Websites

![spring data schema](../../images/spring_data_schema.svg)


More than an inversion of control framework, Spring now comprises a vast collection of enterprise solutions. One of the solutions is the Spring Data Project. <mark style="background: #FFF3A3A6;">Spring Data's mission is to provide a familiar, and consistent Spring-based programming model for data access while still retaining the special traits of the underlying data store</mark>. 

**Spring Data** is actually an umbrella of several sub-projects. There are several modules, and they all specialize in various data sources, but they all depend on commons. <mark style="background: #FFF3A3A6;">Commons</mark> abstracts away from any particular data source. No matter which data source, the goal is always the same. Have a way to convert Java object entities into target data source records and persist them, as well as convert the records back to entities. It can create entities which are then persisted as records to the data store. It can look up data source records by citing the entity attributes. It can update data source records by updating the entity and finally, delete the data source records by deleting the entity. 

**The repository pattern** is an abstraction that is used by Spring Data Commons to accomplish these goals. It is followed throughout the Spring Data Project for creating, reading, updating, and deleting records by citing entities. A module for a particular data source has a repository that extends from the base one. So for example, Spring Data JPA, has a JPA repository. Spring Data MongoDB has a Mongo repository. Spring Data GemFire has a GemFire repository, and so on. Spring Data JPA is the most popular module. 

## CRUD Repository and JPA Repository

In Spring Data, both `CrudRepository` and `JpaRepository` are interfaces that provide convenient methods for performing CRUD (Create, Read, Update, Delete) operations on entities. However, there are subtle differences between them.

1. **`CrudRepository` Interface:**
    
    - **Role:** This is the most basic repository interface in Spring Data.
    - **Key Methods:**
        - `save(S entity)`: Saves the given entity.
        - `findById(ID id)`: Retrieves an entity by its ID.
        - `findAll()`: Returns all entities.
        - `deleteById(ID id)`: Deletes an entity by its ID.
    - **Usage:** Suitable for basic CRUD operations.

2. **`JpaRepository` Interface:**
    
    - **Extension of `CrudRepository`:** `JpaRepository` extends `CrudRepository` and adds additional JPA-specific methods.
    - **Key Methods (In addition to `CrudRepository`):**
        - `getOne(ID id)`: Returns a reference to the entity with the given identifier. (Lazily loaded)
        - `findAll(Sort sort)`: Returns all entities sorted by the given options.
        - `flush()`: Flushes the persistence context, ensuring changes are synchronized with the database.
    - **Usage:** Preferred when working with JPA (Java Persistence API) as it provides JPA-specific features.

**Key Differences:**

- **Additional Methods:** `JpaRepository` includes additional methods specific to JPA, like `getOne` and `flush`.
- **Suitability:** `CrudRepository` is more general-purpose, while `JpaRepository` is tailored for JPA-related scenarios.
- **Lazy Loading:** `getOne` in `JpaRepository` returns a reference to the entity that is lazily loaded, which can be useful in certain situations.

**Choosing Between Them:**

- If you need basic CRUD operations and want to stay agnostic to the underlying persistence technology, you can use `CrudRepository`.
- If you are specifically working with JPA and want access to JPA-specific methods, `JpaRepository` is a better choice.

But, beside all this, be aware of the Anti-Patterns: [The Spring Data JPA findById Anti-Pattern - Vlad Mihalcea](https://vladmihalcea.com/spring-data-jpa-findbyid/))

## Property expression query methods

**Query method** refers to a method signature in a Spring Data repository interface that follows a specific naming convention. Spring Data uses these method names to automatically generate queries based on the method's name, allowing you to perform database operations without writing explicit queries.

The naming convention for query methods is derived from the method name itself, and Spring Data JPA translates it into a corresponding SQL or JPQL query. This mechanism is often referred to as "<mark style="background: #FFF3A3A6;">query derivation.</mark>"

![Rules](../../images/query_methods_rules.png)

Spring Data facilitates fast failure. Query methods are verified at Bootstrap. 
![Fail Fast](../../images/query_method_verify_at_bootstrap.png)
Here, course has not attributed named title. Spring Data throws a Spring Data query creation exception at startup. Without Spring Data, you would not know there was a syntax error until the query is actually invoked which is amazing.

Even is possible to add other clauses that are shown in the official documentation:

[Spring Data Commons - Reference Documentation](https://docs.spring.io/spring-data/commons/docs/3.0.0/reference/html/#repository-query-keywords)

## Query-Annotated Method

One reason to use query annotation is to encouraged to use non-native queries, because they are verified at Bootstrap. Native queries are only verified when invoked.

Another reason to use @Query is that the query is just too complex for property expressions.

![Native Query](../../images/query_native.png)

## Paging and Sorting

Paging and sorting are features that allow you to retrieve a subset of data from a larger dataset. These features are particularly useful when dealing with large result sets, as they enable efficient retrieval of only the necessary data.

### Paging:

Paging refers to dividing a large result set into smaller, manageable chunks or pages. It is useful when you don't need to load the entire dataset at once but rather load it incrementally.

  
In Spring Data, paging and sorting are features that allow you to retrieve a subset of data from a larger dataset. These features are particularly useful when dealing with large result sets, as they enable efficient retrieval of only the necessary data.

### Paging:

Paging refers to dividing a large result set into smaller, manageable chunks or pages. It is useful when you don't need to load the entire dataset at once but rather load it incrementally.

1. **Method Declaration:**
    
    - To enable paging, your repository method should return a `Page` or `Slice` instead of a simple `List`.
    - You need to provide a `Pageable` parameter to your method.
    
    
    ```java 
    Page<User> findAll(Pageable pageable);
    ```
    
2. **Usage:**
    
    - When invoking this method, you can create a `PageRequest` to specify the page number, the number of items per page (page size), and optional sorting.
    
    ```java 
    Pageable pageable = PageRequest.of(0, 10, Sort.by("lastName").descending());      Page<User> resultPage = userRepository.findAll(pageable);
    ```
    
    In this example, the code fetches the first page with 10 items, sorted by the `lastName` attribute in descending order.
    
3. **Accessing Results:**
    
    - The `Page` object contains information about the current page, total number of pages, total number of items, and the actual content.
    
    
    ```java 
    List<User> users = resultPage.getContent();
    ```

### Sorting:

Sorting allows you to specify the order in which the data should be retrieved.

1. **Method Declaration:**
    
    - To enable sorting, you can provide a `Sort` parameter to your repository method.
    
    
    ```java
    List<User> findAll(Sort sort);
    ```
    
2. **Usage:**
    
    - When invoking this method, you can create a `Sort` object to specify the sorting order.
    
    
    ```java 
    Sort sort = Sort.by("lastName").descending(); 
    List<User> sortedUsers = userRepository.findAll(sort);
    ```
    
    In this example, the code fetches all users and sorts them by the `lastName` attribute in descending order.
    
3. **Combining with Paging:**
    
    - You can combine paging and sorting by using a `Pageable` parameter that includes sorting information.
    
    
    ```java
    Pageable pageable = PageRequest.of(0, 10, Sort.by("lastName").descending()); 
    Page<User> resultPage = userRepository.findAll(pageable);
    ```
    
    This example fetches the first page with 10 items, sorted by the `lastName` attribute in descending order.
    

Spring Data automatically translates these method signatures into appropriate SQL queries, making it convenient for developers to work with paged and sorted data.

## Specifications

Specifications provide a way to define complex queries by encapsulating them in reusable components. Specifications are particularly useful when you need to dynamically build queries based on varying criteria. Spring Data JPA supports Specifications as a powerful abstraction for building queries.

```java
@Service
public class DynamicQueryService {

    private CourseRepo courseRepo;

    public DynamicQueryService(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    public List<Course> filterBySpecification(CourseFilter filter) {
        Specification<Course> courseSpecification =
                (root, query, criteriaBuilder) -> {
                    List<Predicate> predicates = new ArrayList<>();
                    filter.getDepartment().ifPresent(d ->
                            predicates.add(criteriaBuilder.equal(root.get("department"), d)));
                    filter.getCredits().ifPresent(c ->
                            predicates.add(criteriaBuilder.equal(root.get("credits"), c)));
                    filter.getInstructor().ifPresent(i ->
                            predicates.add(criteriaBuilder.equal(root.get("instructor"), i)));
                    return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
                };
        return courseRepo.findAll(courseSpecification);
    }
}
```

Documentation on: [Specifications :: Spring Data JPA](https://docs.spring.io/spring-data/jpa/reference/jpa/specifications.html)

## QueryDSL

From the documentation: [Querydsl - Unified Queries for Java](https://querydsl.com/) is a framework that provides a type-safe and expressive DSL for building queries in Java. It allows developers to define queries using a fluent and statically-typed API rather than relying on string-based queries. QueryDSL is often used with JPA (Java Persistence API), Hibernate, and other database access technologies.
### Key Features of QueryDSL:

1. **Type-Safe Queries:**
    - QueryDSL uses a type-safe API, which means that queries are checked at compile time. This reduces the likelihood of runtime errors in the query construction process.
2. **Fluent API:**
    - The API is designed to be fluent, making it easy to read and construct complex queries. QueryDSL leverages method chaining to create a concise and expressive syntax.
3. **Domain-Specific Language:**
    -  QueryDSL is designed to be a domain-specific language for querying databases. It provides a set of classes and methods that closely align with the concepts of SQL and database queries.
4. **Integration with JPA and Hibernate:**
     - QueryDSL seamlessly integrates with JPA and Hibernate, allowing developers to use it in conjunction with these popular Java persistence technologies. It works with JPA entities and supports the JPA query language.
5. **Support for Different Query Types:**
      - QueryDSL supports various types of queries, including SELECT, UPDATE, and DELETE queries. It covers a broad range of use cases for interacting with relational databases.

### How QueryDSL Works:

1. **Entity Mapping:**
    
    - Define JPA entities that represent your data model. These entities are typically annotated with JPA annotations.
    
    javaCopy code
    
    ```java 
    @Entity public class User {
    @Id     
    @GeneratedValue(strategy = GenerationType.IDENTITY)     
    private Long id;      
    private String firstName;     
    private String lastName;     
    // ... }
    ```
    
2. **QueryDSL Integration:**
    
    - Include QueryDSL as a dependency in your project. For example, if you're using Maven:
    
    xmlCopy code
    
    ```xml
    <dependency>
         <groupId>com.querydsl</groupId>     
         <artifactId>querydsl-core</artifactId>     
         <version>4.4.0</version> 
	 </dependency>
	 ```
    
3. **QueryDSL Annotation Processor:**
    
    - Use the QueryDSL annotation processor to generate Q-classes. These Q-classes represent query entities and provide a statically-typed way to reference entity properties.
4. **Building Queries:**
    
    - Use QueryDSL to construct queries using the generated Q-classes. The API allows you to build queries for various operations, such as filtering, sorting, and joining.
    
    javaCopy code
    
    ```java
    QUser qUser = QUser.user; 
    List<User> users = queryFactory
         .selectFrom(qUser)
			  .where(qUser.firstName.eq("John"))       
			  .orderBy(qUser.lastName.asc())     
			  .fetch();
    ```
    
    In this example, `qUser.firstName.eq("John")` represents a condition where the first name is equal to "John."
    
5. **Executing Queries:**
    
    - Execute the constructed queries using JPA or other database access technologies. QueryDSL provides the flexibility to work with different query execution mechanisms.

## Query By Example

Query by Example (QBE) is a user-friendly querying technique with a simple interface. It allows dynamic query creation and does not require you to write queries that contain field names. In fact, Query by Example does not require you to write queries by using store-specific query languages at all.

Documentation: [Query by Example :: Spring Data Relational](https://docs.spring.io/spring-data/relational/reference/query-by-example.html)

### Key Concepts and How It Works:

1. **Example Entity:**
    
    - You create an instance of the entity you want to query (the example entity). Set the properties with the values you want to use as filters for the query.
    
    ```java
    User exampleUser = new User(); 
    exampleUser.setFirstName("John"); 
    exampleUser.setLastName("Doe");
    ```
    
2. **ExampleMatcher:**
    
    - Define an `ExampleMatcher` that specifies how the matching should be performed. The matcher allows you to configure options such as case sensitivity, string matching mode, and more.
    
    
    ```java
    ExampleMatcher matcher = ExampleMatcher.matching()
         .withIgnoreCase()
              .withMatcher("firstName",
               ExampleMatcher.GenericPropertyMatchers.startsWith())     
               
               .withMatcher("lastName",  
               ExampleMatcher.GenericPropertyMatchers.endsWith());
               ```
    
    In this example, `withIgnoreCase()` makes the matching case-insensitive, and `withMatcher` configures specific matching criteria for individual properties.
    
3. **Example:**
    
    - Create an `Example` object using the example entity and the matcher.
    
    ```java
    Example<User> example = Example.of(exampleUser, matcher);
    ```
    
4. **Query Execution:**
    
    - Use the `Example` object in a Spring Data repository method. Spring Data repositories provide methods like `findAll(Example<T> example)` that accept an `Example` as a parameter.        
    
    ```java
    List<User> result = userRepository.findAll(example);
    ```
    
    The repository method dynamically constructs a query based on the provided example, and it retrieves entities that match the specified criteria.
    

### Example:

Let's say you have a `User` entity:

```java
@Entity 
public class User {
	@Id     
	@GeneratedValue(strategy = GenerationType.IDENTITY)     
	private Long id;      
	private String firstName;     
	private String lastName;     
	// getters and setters }
```

You can use Query by Example to find users with a specific first name and last name:

```java
User exampleUser = new User(); exampleUser.setFirstName("John"); 
exampleUser.setLastName("Doe");
ExampleMatcher matcher = ExampleMatcher
	.matching()
	.withIgnoreCase()
	.withMatcher("firstName",ExampleMatcher.GenericPropertyMatchers.startsWith()) 
	.withMatcher("lastName", ExampleMatcher.GenericPropertyMatchers.endsWith());  
	
	Example<User> example = Example.of(exampleUser, matcher);  
	List<User> result = userRepository.findAll(example);
```

In this example, the query will find all users whose first name starts with "John" (case-insensitive) and last name ends with "Doe."

## Spring Data REST

Spring Data REST is part of the umbrella Spring Data project and makes it easy to build hypermedia-driven REST web services on top of Spring Data repositories.

Spring Data REST builds on top of Spring Data repositories, analyzes your application’s domain model and exposes hypermedia-driven HTTP resources for aggregates contained in the model.

As you can see, when Data Rest is configured, Spring add to the endpoints names an "s" to denote standard API notation.

![](../../images/spring_data_rest.png)

Documentation: [Spring Data REST](https://spring.io/projects/spring-data-rest)

### Projections in Spring Data REST

<mark style="background: #FFF3A3A6;">Projections in Spring Data REST allow you to shape the response of your API</mark> by defining a subset of the entity's properties that should be included. This is particularly useful when you don't need all the details of an entity and want to reduce the payload size.

To use projections, you define an interface that declares the subset of properties you want. The interface serves as a view on the entity.

**Example:**

Assuming you have an entity `Person`:

```java 
@Entity 
public class Person {     

	@Id     
	@GeneratedValue(strategy = GenerationType.IDENTITY)     
	private Long id;          
	private String firstName;     
	private String lastName;     
	private int age;     
	// getters and setters }
```

You can create a projection interface like this:

```java
@Projection(name = "simplePerson", types = Person.class) 
public interface SimplePersonProjection {     
	String getFirstName();     
	String getLastName(); 
}
```

Then, when you request the `/persons` endpoint, you can include the projection:

- **Request:** `/persons?projection=simplePerson`
- **Response:**
    
    ```json
    {   
    "_embedded": {     
	    "persons": 
	    [       
		    {         
		    "firstName": "John",         
		    "lastName": "Doe"       
		    },       
		    {         
		    "firstName": "Jane",         
		    "lastName": "Smith"       
		    }     
	    ]   
		} 
	}
    ```
    

This response only includes the `firstName` and `lastName` properties, as defined in the `SimplePersonProjection` interface.