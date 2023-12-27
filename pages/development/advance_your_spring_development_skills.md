## Advance Your Spring Development Skills

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

This are the notes for the 6 courses Specialization PATH on Linkedin Learning.

## Table of Content

1. [Spring Cloud Load Balancing](#01)
2. [Performance Tuning in Spring Apps](#02)
3. [Spring Boot Observability: Deep Dive into Logging, Metrics, and Tracing](#03)
4. [Advanced Spring: Spring Boot Actuator](#04)
5. [Advanced Spring: Application Events](#05)
6. [Advanced Spring: Effective Integration Testing with Spring Boot](#06)

---
<a name="01"></a>
# Spring Cloud Load Balancing

## Introduction

In software engineering, **Load Balancing** is the practice of <mark style="background: #FFF3A3A6;">distributing</mark> computational workloads across multiple servers. This process ensures that no single server bears too much demand. By spreading the work evenly, load balancing improves application responsiveness. It also increases the <mark style="background: #FFF3A3A6;">availability</mark> of applications and websites for users. Load balancers evaluate client requests by examining application-level characteristics (the IP address, the HTTP header, and the contents of the request). The load balancer then looks at the servers and determines which server to send the request to.

Load balancing has a significant impact on **user experience**. By dividing user requests among multiple servers, user wait time is vastly cut down. This results in a better user experience. Long page load times, and poor response times to user actions, create a bad user experience. Waiting for content to load becomes frustrating for users and may provoke them into leaving the site or application altogether. Load balancers handle traffic spikes by moving data efficiently, optimizing application delivery resource usage, and preventing server overloads. That way, the website performance stays high, and users remain satisfied.

With Google Cloud Platform (GCP), load balancing is a software cloud-based offering to automatically facilitate shift of traffic from one instance to another when traffic or load is increased.

- GCP has eight load balancer offerings that vary by flow of traffic, traffic type, and global or regional support.
- **Flow of traffic** can be external (from the internet) or internal (from within the network).

![](../../images/load_balancer_external_traffic.png)

- **Traffic type** can be HTTP, HTTPS, TCP, or UDP.
- **Global or regional** support means whether the load balancer can route traffic to instances in different regions or only in one region.

![](../../images/load_balancer_regional.png)

Google Cloud Platform (GCP) offer two types of internal load balancers:

- **Internal TCP and UDP Load Balancer**: This type is ideal for serving TCP traffic, which is suitable for data that needs to be retransmitted if dropped, like photos. It also serves UDP traffic, which is ideal for video streaming.

- **Internal HTTP and HTTPS Load Balancer**: This type serves HTTP and HTTPS traffic, which is typically seen with Java backend APIs.

Both load balancers are internal, meaning they serve traffic between internal instances and not from the external internet. They are assigned an internal IP address used for internal instances or clients to forward traffic to. Both types only support instances deployed in a single region. The choice between the two depends on the type of traffic and the application's requirements.

## External Load Balancer

- **External TCP/UDP Network Load Balancer**: Supports network traffic for TCP, UDP, ESP, and ICMP. It's a regional load balancer, ideal for instances in one region expecting external TCP, UDP, ESP, or ICMP type traffic.
- **TCP Proxy Balancer**: Distributes TCP traffic from the external internet across regional or global instances. It proxies TCP traffic, meaning it creates two connections - one from the client to the load balancer, and another from the load balancer to the instance.
- **SSL Proxy Load Balancer**: Similar to the TCP Proxy, but serves encrypted or secure SSL traffic instead.

 - **Documentation**: [Cloud Load Balancing overview  |  Google Cloud](https://cloud.google.com/load-balancing/docs/load-balancing-overview)



<a name="02"></a>
# Performance Tuning in Spring Apps


<a name="03"></a>
# Spring Boot Observability: Deep Dive into Logging, Metrics, and Tracing


<a name="04"></a>
# Advanced Spring: Spring Boot Actuator


<a name="05"></a>
# Advanced Spring: Application Events


<a name="06"></a>
# Advanced Spring: Effective Integration Testing with Spring Boot