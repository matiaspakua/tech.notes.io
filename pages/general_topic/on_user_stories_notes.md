# Notes on user Stories

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

# Introduction

## What is a User Story?

User stories were created to be "placeholders for a conversation." They allow us to defer detailed analysis until we're confident that the behaviour they describe actually needs to be developed. <mark style="background: #FFF3A3A6;">They represent VALUE for the users</mark>.

User stories are a core practice in Agile methodologies, used to capture and describe features from the perspective of the end user. They provide a concise and clear way to understand what the user needs and why it's important, promoting collaboration and focus within development teams.

## key uses of user stories

* **Capturing user requirements:** User stories help to gather and document the needs of users in a way that is easy to understand and remember. This can be done through workshops, interviews, or user observations.
* **Prioritizing development work:** User stories can be used to prioritize development work based on the value they deliver to users. This helps to ensure that the team is working on the most important features first.
* **Estimating effort:** User stories can be used to estimate the amount of effort required to develop a feature. This helps to ensure that the team is realistic about what can be achieved in a given sprint.
* **Improving communication:** User stories can be used to improve communication between developers, product owners, and stakeholders. This is because they provide a shared understanding of what is being built and why.
* **Tracking progress:** User stories can be used to track the progress of development work. This helps to ensure that the team is on track to deliver the features that have been committed to.

## Characteristics of good user stories (INVEST)

* **Independent:** Each user story should be independent of other stories, so that it can be developed and delivered in isolation.
* **Negotiable:** User stories are not set in stone, and they can be negotiated between the product owner and the development team.
* **Estimable:** Each user story should be small enough that it can be estimated in terms of effort.
* **Valuable:** Each user story should deliver value to the end user.
* **Testable:** Each user story should be testable, so that you can know when it is complete.

## Examples of simple user stories (post-its)

 - Example 01:

**As a** customer, 
**I want to** be able to search for products by name 
**so that** I can easily find what I'm looking for.

 - Example 02: 

**As a** website administrator, 
**I want to** be able to add new products to the website 
**so that I** can keep my inventory up-to-date.

 - Example 03: 

**As a** mobile app user, 
**I want to** be able to track my order status 
**so that** I know when my package will arrive.

## Anatomy of user stories

User stories consist of key components that provide a clear picture of the desired functionality. The essential parts of a user story:

1. **The User (Actor):** This identifies the individual who will benefit from the feature. It can be a specific user role (e.g., administrator, customer) or a user persona representing a target user group.
    
2. **The Goal (Action):** This describes what the user wants to achieve with the feature. Focus on the action the user performs (e.g., "I want to search for products by category").
    
3. **The Benefit (Why):** This explains the motivation behind the user's goal. It highlights the value the user gets by completing the action (e.g., "So that I can easily find the items I'm looking for").
    

These three components form the core structure of a user story, often phrased as: "As a [User], I want to [Goal] so that [Benefit]."

Optionally, user stories can also include:

4. **Acceptance Criteria:** This acts as a checklist outlining the specific conditions that must be met for the feature to be considered successful. These criteria ensure everyone agrees on what "done" looks like (e.g., "The search results should be paginated with 10 items per page").

## Gherkin, Cucumber and acceptance criterias

Gherkin is a **domain-specific language (DSL)** designed specifically to express software behavior in a natural, human-readable way. It focuses on describing what the system should do from the user's perspective, making it easier for both technical and non-technical stakeholders to understand the acceptance criteria.

Here's how Gherkin is associated with Cucumber:

- **Cucumber** is a popular open-source **Behavior Driven Development (BDD)** framework. BDD emphasizes building software based on user stories and scenarios.
- **Gherkin** serves as the **language** used within Cucumber to write these scenarios. It provides a structured format with keywords like "Given", "When", "Then", and "And" to define the preconditions, actions, and expected outcomes for a particular user interaction.

Why are Gherkin and Cucumber useful for acceptance criteria?

- **Clarity and Collaboration:** Gherkin promotes clear communication between developers, testers, and product owners. Everyone involved can understand the expected behavior in plain language, reducing misunderstandings and ensuring everyone is on the same page about what "done" means.
- **Focus on Behavior:** The focus on user behavior in scenarios helps ensure the software is built around user needs and delivers value.
- **Maintainability and Traceability:** Acceptance criteria written in Gherkin can be easily maintained alongside the code, allowing for traceability between requirements and implementation. This makes it easier to verify if the implemented features meet the user's needs.
- **Automation Potential:** Gherkin scenarios can be used as the basis for automated acceptance tests. Cucumber tools can parse these scenarios and translate them into executable tests, streamlining the testing process.

In essence, Gherkin provides a structured and collaborative way to define acceptance criteria in a language everyone understands. This improves clarity, promotes BDD principles, and lays the groundwork for potential test automation.


## User story slicing

User stories can sometimes be too large and complex to be developed in a single sprint. In this case, they can be sliced into smaller, more manageable stories. Slicing should be done vertically, meaning that each slice should include all of the layers of functionality needed to deliver a complete piece of value to the user.

**Here are some benefits of slicing user stories:**

* **Reduces risk:** By delivering smaller pieces of functionality more frequently, you can reduce the risk of delivering a product that users don't want or need.
* **Improves feedback:** By getting feedback on smaller pieces of functionality early and often, you can make sure that you are on the right track.
* **Increases engagement:** By delivering working features more frequently, you can keep stakeholders and users engaged in the development process.

## References
 * [Mike Cohn on User Stories](https://vimeo.com/97516290)
 * [User story - Wikipedia](https://en.wikipedia.org/wiki/User_story)