# Modern Software Engineering: Doing What Works to Build Better Software Faste

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

![](../../images/modern_software_engineering.jpg)

## 1. Introduction

1. **Engineering**  - The practical application of science. Software engineer need to become experts at learning.
2. **What is software Engineering**? Software engineering is the application of an empirical, scientific approach to finding efficient, economic solutions to practical problems. We must become experts at learning and experts at managing complexity.
3. To become experts at "<mark style="background: #FFF3A3A6;">learning</mark>" must apply:
	1. Iteration
	2. Feedback
	3. Incrementalism
	4. Experimentation
	5. Empiricism
4. To become experts at "<mark style="background: #FFF3A3A6;">managing complexity</mark>" we need to following:
	1. Modularity
	2. cohesion
	3. separation of concerns
	4. abstraction
	5. loose coupling
5. The following are **practical tools** to drive an effective strategy:
	1. Testability
	2. Deployability
	3. Speed
	4. Controlling variables
	5. Continuos delivery

## 2. What is Engineering?

1. The first software engineer: **Margaret Hamilton**. Her approach was the focus on how thinks fail - <mark style="background: #FFF3A3A6;">the ways in which we get thinks wrong: "failing safely"</mark>. The assumption is that we can never code for every scenario, so how do we code in ways that allow our systems to cope with unexpected and still make progress?

![](../../images/failing_safely.jpg)

1. **Managing complexity**: Edsger Dijkstra said: "The art of programming is the art of organizing complexity."
2. **Repeatability and Accuracy of measurement**:  engineering-focused team will use accurate measurement rather than waiting for somethings bad to happen.
3. Engineering, creativity and craft: taking an engineering approach to solving problems does not, in any way, reduce the importance of skill, creativity and innovation.
4. Design engineering is a deeply exploratory approach to gaining knowledge.
5. Trade-offs: one of the key trade-off that is vital to consider in the production of software, is "<mark style="background: #FFF3A3A6;">coupling</mark>".

## 3. Fundamentals of an Engineering Approach

1. **The important of measurements**: The most important concepts are: stability and throughput. Stability is tracked by:
	1. Change Failure Rate
	2. Recovery Failure time
2. Throughput is tracked by:
	1. Lead time: the time needed to go from idea to working software.
	2. Frequency: how often we go to production.
3. throughput is a measure of a team's efficiency at delivering ideas, in the form of working software.
4. Is importante to improve this measure to make decisions based on evidence.
5. **Foundations**: so, we need to become experts in learning and managing complexity.
6. **Expert at learning**:
	1. working iteratively
	2. Employing fast, high-quiality feedback
	3. working incrementally
	4. being experimental
	5. being empirical
7. Expert ar managing complexity:
	1. Modularity
	2. Cohesion
	3. separation of concerns
	4. information hiding/abstraction
	5. coupling

# Optimize for Learning

## 4. Working Iteratively

1. **Iteration** allows us to learn, react and adapt. It's at the heart of all exploratory learning and is fundamental to any real knowledge acquisition.
2. Working iteratively encourage us to think in smaller batches and to take modularity and separation of concerns.
3. Iterate, learn, adapt to new tech: as Kent Beck says in Extreme programming: <mark style="background: #FFF3A3A6;">"Embrace change!</mark>".

Reference to my notes of Extreme Programming:  [XP](book_extreme_programming_explained.md)

## 5. Feedback

1. **Importance** of: <mark style="background: #FFF3A3A6;">without feedback, there is no opportunity to learn</mark>. Feedback allows us to establish a source of evidence for our decisions.
2. **Feedback in coding**: with UNIT TEST!!!!
3. **Feedback in Integration**: Continuos Integration (CI) is about evaluating every change to the system along with every other change to the system as frequently as possible, as close to "continuously".
4. **Feedback in design**: TDD as a practice, is what give us most feedback in design. <mark style="background: #FFF3A3A6;">If the test are hard to write</mark>, that tells that somethings important about the quality of the code and the design.
5. **Feedback in product Design:**  adding telemetry to our systems that allows us to gather data about which features of our systems are used, and how they are used, is now the norm.
6. Modern times: we are going to "Business and IT" ==> "Digital Business". The telemetry can provide insights into what customer wants, needs and behaviour that event the customers themselves are not conscious of.
7. **Feedback in Organization and Culture**: All this concepts of feedback are generally not apply in the Organization and in the culture. When people apply this kind of approach they get much better result: "Lean Thinking" => The Toyoya Waty is an example of this.

## 6. Incrementalism

1. **Definition**: "incremental design is directly related to any modular design application, in which components can be freely substituted if improved to ensure better performance."
2. **Importance of Modularity**: divide the problem into pieces aimed at solving a single part of the problem.
3. **Organizational incrementalism**: One of the huge benefits that modularity brings is "isolation".  Modular organizations are more flexible, mode scalable and more efficient.
4. Tools: Feedback, experimentation, Refactoring, Version control, testing. A test-driven approach to automated testing demand that we create  mini executable specifications for the changes that we make to our systems. Keeping the test as simple as we can and by designing our system as testeable code.
5. **Limit the impact of change**: Applying patterns as: <mark style="background: #FFF3A3A6;">Port & Adapter</mark>. At any interface point between two components of the system that we want to decouple, a port, we define a separate piece of code to translate inputs and outputs, the adapter.

![](../../images/hexagonal_architecture.png)

Hexagonal Architecture: [Hexagonal architecture – Alistair Cockburn](https://alistair.cockburn.us/hexagonal-architecture/)

6. **Speed of feedback:**  the fast, better.
7. **Incremental design**: the agile concepts is based on the premise that we can begin work before we have all the answers. Accepting the we don't know, doubting what we do know, and working to learn fast is a step from dogma toward engineering. 
8. **Avoid over-engineering**: never add code for thinks that I don't know are needed now. The important concept with code is that code need to be simple and small, that allows me to change when I learn new thinks.

## 7. Empiricism

1. **Definition**: Empiricism, in the philosophy of science, is defined as "emphasizing evidence, especially as discovered in experiments".
2. **I know that Bug!**: Science works!. Make a hypothesis. Figure out how to prove or disprove it. Carry out the experiment. Observe the results and see they match your hypothesis. Repeat.
3. **Avoid Self-deception**: "<mark style="background: #FFF3A3A6;">The first principle is that you must not fool yourself and you are the easiest person to fool.</mark>"
4. **Guided by Reality**: the best way to start is to assume that what you know, and what you think, is probably wrong and then figure out how you could find our how it is wrong.

## Being Experimental

