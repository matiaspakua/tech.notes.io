# Agile and Scrum. The perks of know nothing

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


## Table of content
- [2. Agile and Scrum. The perks of know nothing](#2-agile-and-scrum-the-perks-of-know-nothing)
  - [Table of content](#table-of-content)
  - [The problem](#the-problem)
  - [Problem breakdown stages](#problem-breakdown-stages)
  - [Stage #01: Understand the current system/product. For this was needed:](#stage-01-understand-the-current-systemproduct-for-this-was-needed)
  - [Stage #02: process and methodology reformulation (Houston we have a problem)](#stage-02-process-and-methodology-reformulation-houston-we-have-a-problem)
  - [Stage #03: deconstruction, stabilisation and new hope](#stage-03-deconstruction-stabilization-and-new-hope)
  - [Stage #04: Continuous flow of improvements, fixes and evolution](#stage-04-continuous-flow-of-improvements-fixes-and-evolution)
  - [Agile and SCRUM](#agile-and-scrum)
    - [Agile Methodology](#agile-methodology)
    - [Scrum Framework](#scrum-framework)
    - [Scrum Board example](#scrum-board-example)
  - [Technical Excellence](#technical-excellence)
    - [What is technical excellence and the relation with agile](#what-is-technical-excellence-and-the-relation-with-agile)
    - [Technical excellence by Kent Beck](#technical-excellence-by-kent-beck)
    - [Technical excellence by Martin Fowler](#technical-excellence-by-martin-fowler)
    - [Technical excellence by Alistair Cockburn](#technical-excellence-by-alistair-cockburn)
  - [Challenges when trying to implement an AGILE culture](#challenges-when-trying-to-implement-an-agile-culture)
  - [How to fix a bad agile](#how-to-fix-a-bad-agile)
    - [Standard fixes](#standar-fixes)
    - [Advances fixes](#advances-fixes)
  - [Constant priority changes and new requirements](#constant-priority-changes-and-new-requirements)
  - [Better Agility](#better-agility)
  - [Kanban when Scrum fails?](#kanban-when-scrum-fails)
  - [The Perks of knowing nothing about Agile and Scrum. Conclusions](#the-perks-of-knowing-nothing-about-agile-and-scrum-conclusions)
  - [References](#references)

<a name="the-problem"></a>
## The problem

Begins with the classical problem of a company that starts a project/product. The company says that there is the need of rapid development and release of new versions of the product "X" with new features, less bugs, better performance, improve quality…and so forth.

After a year or so, a new team was assembled and was assigned to continue the development of the product (here is where I started), so here we go, knowing nothing about Scrum and Agile.

<a name="problem-breakdown-stages"></a>
## Problem breakdown stages

The process we had walk through can be summarised in 4 big stages:

![Stages](../../images/stages.png)

## Stage #01: Understand the current system/product. For this was needed:

1. **Familiarise with the business domain**: Before diving into the code, it is important to understand the business domain that the system is serving. This helps to identify the main requirements and the critical business flows that the system should support.

2. **Document review**: Go through the available documentation, like design documents, requirement specifications, and any technical documentation that has been created for the system. (if it exists, if not, start documenting).

3. **Code review**: Start reviewing the code, focusing on the main modules and flows. Try to understand the architecture and design patterns that have been used.

4. **Test case review**: Review the existing test cases and test plans to understand the expected behavior of the system (if there exists).

5. **Stakeholder engagement**: Engage with the stakeholders and end-users of the system to understand their requirements and expectations from the system.

6. **Identify potential risks and challenges**: Identify any potential risks and challenges that might impact the development of the system, such as technical debt, complexity, or missing documentation.

## Stage #02: process and methodology reformulation (houston we have a problem)

After the stage 01, we realize that exist several problems in general, than can be summarized as follows:

1. **Lack of clear requirements and specifications**: If the requirements are not clearly defined, it can lead to miscommunication and confusion between the development team and stakeholders. This can result in the development of features that do not meet the needs of the users.

2. **Insufficient resources**: Lack of resources such as skilled developers, project managers, and adequate infrastructure can impede the development process and lead to delays.

3. **Poor project management**: Poor project management can result in a lack of coordination between teams, missed deadlines, and a lack of accountability.

4. **Technical challenges**: The development process can be impacted by unexpected technical issues that arise during development, such as compatibility issues with existing systems, scalability problems, and security vulnerabilities.

5. **Resistance to change**: A lack of support from stakeholders, especially users, can hinder the implementation of new features, as they may be resistant to change.

6. **Poor quality code**: Code quality is critical to the success of a software development project. Poor quality code can result in bugs, security vulnerabilities, and maintenance issues, leading to delays and additional costs.

7. **Poor testing processes**: Inadequate testing processes can lead to the release of features with bugs and other issues, resulting in a negative impact on user experience and business reputation.

After analyzing those problems, we decided to fix it. To start, we need a methodology, a process and tools. The most important aspect we already have: A GREAT TEAM. This is the basement of success, I don’t know another.

With a little search, it was clear: “Agile” is the way. Agile methodologies are a set of values and principles  that prioritize customer collaboration and adaptive planning. Scrum is one of the most popular Agile methodologies, and it is used to manage and complete complex projects (this was the case). In Scrum, a project is broken down into small and manageable iterations called sprints, and the team works closely with the customer to prioritize and deliver the most valuable features first.

## Stage #03: deconstruction, stabilization and new hope

**Deconstruction**: In this stage we fight against the great, big and common problem of most companies that try "agile" culture: "the resistance to change". Agile requires a shift in the way teams think and work, which can be difficult for individuals and organizations that are used to traditional project management approaches. This can lead to a lack of buy-in and support from team members, stakeholders, and management, making it difficult to fully implement and benefit from agile practices.

Other common challenges include a lack of understanding or training in agile methodologies, difficulty in adapting to new processes and practices, and a lack of alignment and communication between teams and stakeholders. It's important for companies to address these challenges proactively and work to build a strong foundation for their agile culture through education, communication, and collaboration.

**Stabilization and new hope**: after the storm of the first 3 weeks, results appear, not without doubts of course, but things become cleaner, processes start to rise and hope emerges, we know that “real” result for the final users will be available in the next week, so we start with the practice of end of sprint “demos” in an attempt to show new features, bug fixing and another improvements.


## Stage #04: Continuous flow of improvements, fixes and evolution 

In the next 6 to 8 week after the stabilisation phase, starts a development flow with the following improvements: 

1. **Increased productivity**: by focusing on iterative development, continuous feedback, and continuous improvement. By breaking down work into small, manageable chunks, the teams can work more efficiently and deliver high-quality software faster.

2. **Better product quality**: By integrating quality assurance into the development process, Scrum can help ensure that the final product meets the customer's requirements and with less defects. This is achieved through continuous testing and feedback loops that allow the team to make adjustments in real-time. This was one of the biggest improvement, start with unit test, integration test and acceptance test into a CI pipeline.

3. **Improved collaboration**: Scrum promotes collaboration and communication among team members and stakeholders, which can lead to a more cohesive and motivated team. By having everyone work towards a common goal, teams can build trust and improve their ability to work together effectively and we have a lot of internal users (of the company) that view more collaboration as a great step forward.

4. **Faster time-to-market**: With its focus on delivering working software in short iterations, Scrum can help companies get their products to market faster. By identifying and addressing issues early in the development process, teams can avoid delays and deliver the product to customers more quickly. It took us several weeks to end sprints with versions ready to go to production, but finally the flow began to accelerate.

5. **Increased adaptability**: Scrum's iterative and incremental approach allows teams to be more adaptable to changes in requirements, market conditions, or technology. By working in short sprints and delivering working software frequently, teams can quickly adjust their priorities and make changes as needed.

<a name="agile-and-scrum"></a>
## Agile and SCRUM

So far we talk about Agile Methodology and the SCRUM framework. So here is a brief description of each.

### Agile Methodology

Agile methodology is an approach to software development that emphasises flexibility and adaptability in the face of changing requirements, customer needs, and evolving technology. The Agile methodology is characterised by iterative and incremental development, early and continuous delivery of working software, close collaboration between developers and customers, and an emphasis on delivering value to the customer.

Agile is based on a set of values and principles outlined in the Agile Manifesto, which emphasises individuals and interactions, working software, customer collaboration, and responding to change. Agile teams work in short time-boxed iterations or sprints, typically lasting one to four weeks, and focus on delivering a working software product at the end of each iteration.

The Agile methodology includes several different frameworks or methodologies, including Scrum, Kanban, Extreme Programming (XP), and others. Each framework has its own specific practices and processes, but all are based on the Agile values and principles and share a focus on delivering high-quality software that meets the needs of the customer.


### Scrum Framework

Scrum is an Agile framework for software development that is widely used to manage and complete complex projects. It emphasizes collaboration, transparency, and continuous improvement. Here are the key components of the Scrum framework:

1. **Product backlog**: A prioritized list of features or requirements that the team works on, with the most important items at the top.
2. **Sprint planning**: The team selects a subset of items from the product backlog to work on in the upcoming sprint, and creates a sprint goal.
3. **Daily Scrum**: A daily 15-minute meeting where team members discuss their progress and plan their work for the day.
4. **Sprint review**: A meeting at the end of each sprint where the team presents what they have accomplished and gets feedback from stakeholders.
5. **Sprint retrospective**: A meeting at the end of each sprint where the team reflects on what went well, what didn't go well, and identifies areas for improvement.
6. **Sprint**: A time-boxed period (typically 2-4 weeks) in which the team works to complete the selected items from the product backlog.

![Scrum framework](../../images/scrum-framework.png)

The Scrum framework emphasizes collaboration and communication among team members, and places a strong emphasis on delivering a potentially shippable product increment at the end of each sprint. The framework is designed to be flexible and adaptable, and can be tailored to fit the specific needs of a development team.

### Scrum Board example

|Open	  |WIP	  |R2QA	  |Closed |
|-------|-------|-------|-------|
|Task 1	|Task 2	|Task 5	|Task 7 |
|Task 3	|Task 4	|Task 6	|Task 8 |

In this example, each row represents a task or user story and the columns represent the stages of progress, from "Open" to "WIP," "R2QA," and "Done." As the team works on each task, they move it to the appropriate column until it is complete.

<a name="technical-excellence"></a>
## Technical Excellence

### What is technical excellence and the relation with agile
Technical excellence is a crucial aspect of an agile culture, as it allows teams to continuously improve the quality of their code and the performance of their systems. In an agile culture, there is a focus on delivering working software in short cycles, and technical excellence is essential to achieving this goal. Teams that have strong technical skills and follow best practices for software development, such as automated testing and continuous integration, are better able to deliver high-quality software on a regular basis.

In addition, technical excellence is also important for maintaining agility over the long term. As systems become more complex and requirements change, technical debt can build up, making it harder and harder to make changes and slowing down the delivery of new features. By focusing on technical excellence and continuously improving the quality of their code, teams can avoid this problem and maintain their agility over time.

### Technical excellence by Kent Beck

Kent Beck is a well-known figure in the Agile software development movement, having played a key role in the creation and popularization of Extreme Programming (XP), one of the most well-known Agile methodologies. Beck believes that technical excellence is an essential aspect of Agile software development, as it allows development teams to deliver high-quality software that meets the needs of their users.

In Beck's view, Agile methodologies should emphasize the importance of technical excellence from the very beginning of the development process. This means that Agile teams should focus on building a strong foundation of technical skills and best practices, such as automated testing, continuous integration, and frequent code reviews.

By prioritizing technical excellence, Agile teams can reduce the amount of technical debt that accumulates over time, making it easier to maintain and evolve their software over the long term. Additionally, a focus on technical excellence can help teams avoid common problems such as buggy, unreliable software, and long, unpredictable release cycles.

Overall, Beck believes that a commitment to technical excellence is essential to the success of any Agile development effort. By building a strong technical foundation, development teams can deliver high-quality software that meets the needs of their users, while also maximizing their ability to respond to changing requirements and market conditions.

### Technical excellence by Martin Fowler

Martin Fowler, a well-known software development thought leader, has emphasized the importance of technical excellence in agile methodologies. According to Fowler, agile practices rely heavily on the ability to make changes to the software frequently, quickly, and with confidence. This requires a solid foundation of technical practices, such as continuous integration, automated testing, and refactoring, which ensure that the software can be changed safely and easily without causing defects or errors.

Fowler believes that technical excellence is a prerequisite for successful agile development, as it enables the team to move quickly and confidently in response to changes in requirements or priorities. Without a solid foundation of technical practices, agile development can become difficult, slow, and risky, as changes to the software can introduce defects, cause delays, and erode confidence in the team's ability to deliver high-quality software. Therefore, Fowler stresses the importance of continuous improvement in technical practices and the adoption of technical excellence as a core value of the agile mindset.

### Technical excellence by Alistair Cockburn

Alistair Cockburn is an influential figure in the Agile community and one of the co-authors of the Agile Manifesto. He believes that Agile methodologies and technical excellence go hand in hand. He argues that technical excellence is a necessary prerequisite for Agile development because Agile requires a high degree of adaptability and responsiveness to change, which is only possible with a solid technical foundation.

Cockburn has identified four pillars of technical excellence that are critical to Agile development: communication, simplicity, feedback, and courage. According to him, good communication practices help developers share knowledge and create a shared understanding of the system they are building. Simplicity is important to reduce complexity and make the system more manageable. Feedback is crucial to help teams quickly identify problems and make adjustments. And courage is necessary to take risks, experiment with new ideas, and embrace change.

Cockburn also emphasizes that Agile methodologies require a collaborative and iterative approach to development. He advocates for practices such as pair programming, continuous integration, and test-driven development (TDD) as key components of an Agile development process. These practices help ensure that the code is of high quality, reliable, and maintainable, which is critical for successful Agile development.

<a name="challenges-when-trying-to-implement-an-agile-culture"></a>
## Challenges when trying to implement an AGILE culture

1. **Resistance to change**: The biggest challenge is often the resistance to change. People may be comfortable with the status quo, or may not understand the benefits of agile practices.

2. **Lack of training**: Without proper training, people may not understand the agile process or how to work in an agile environment. This can lead to frustration and failure.

3. **Poor communication**: Agile methodologies rely heavily on collaboration and communication between team members. If communication is poor, it can lead to misunderstandings and delays.

4. **Siloed teams**: Agile methodologies are designed to break down silos and encourage cross-functional teams. If teams are siloed and work in isolation, it can be difficult to implement agile practices.

5. **Unclear goals**: Agile methodologies require clear goals and objectives. Without them, it can be difficult to prioritize work and ensure that everyone is working towards the same objectives.

6. **Lack of leadership support**: Agile transformation requires support and buy-in from senior leadership. Without it, it can be difficult to make the necessary changes and sustain them over time.

7. **Inadequate infrastructure**: Agile practices require modern tools and infrastructure to support rapid development and testing. Without them, it can be difficult to implement agile methodologies effectively.

<a name="how-to-fix-a-bad-agile"></a>
## How to fix a bad agile

### Standar fixes

1. **Energize sleepy stand-ups**: if a daily stand-up runs more than 15 minutes, is a status meeting: Avoid this. The stand-up meeting needs to be focused on the team, the work to do and if there is a block.
2. **Avoid negative retrospectives**: the world of work is not perfect, the people are not perfect, so focus on what can the team change to improve their day-a-day life. That's what matters.
3. **Fill empty product review (demos)**: ensure that the people in the review cares about the review and give real feedback, otherwise it is very de-motivating to show something that nobody cares about.
4. **To be agile, start being very structured**: A well-defined process or methodology can provide a structured approach for teams to apply agile practices, identify and address process gaps or bottlenecks, and ensure everyone is aligned on goals, roles, and responsibilities. Additionally, a well-defined process can also help teams to measure progress and identify areas for improvement. It is important to note that while a well-defined process or methodology can be beneficial for agile adoption, it should not be viewed as a rigid set of rules. Teams should remain flexible and adapt their approach as needed to deliver value to customers and achieve their goals. So my best advice to start with agile is to run the framework that you chose as they were intended, then after lots of practice, improve.
5. **Fix variable velocity**:  examine user stories, to be clear, complete and make sense and then understand clearly which is the deliverable for the end of the sprint.
6. **Write useful user stories**: understand clearly the template of a user story, the intent and with clear idea that a user story is not a project requirement.
7. **Avoid poor planning and improve bad estimates**: keep everybody involved and trained on the chosen technique, create a space of safety for the team to estimate without any penalization. Learn from the past.


### Advances fixes

1. **Engage disengaged product owners**: choose the right person for a given role, the PO needs to be very involved with the team.
2. **Democratize autocratic scrum master**, a SM should avoid the following attitudes: command-and-control, blaming attitude, defensive attitude, be arrogant or impatient with the team progress.
3. **Engage collaboration across functional areas**. Encourage cross-functional training and knowledge sharing. This can be achieved through activities such as shadowing, pairing, or job rotations, which can help break down silos and promote a culture of collaboration and continuous learning.
4. **Avoid performance coaches**: avoid the theatrical performances, that one persona has a role and every thing he does is only to fulfill that role. What matters in an agile team is collaboration and transparency.
5. **Appease milestone managers**, avoid the creation of detailed and heavyweight GANTT charts, there is a need of a “high level” planning of course, but with very little detail, only enough information to shape a guiding line.
6. **Manage developing directors**: avoid multiple bosses interfering with the team, the value stream of the team needs to be owned by the team itself.
7. **Ride CIO turnarounds**, avoid following the trending: “if company X is innovative, then I need do the same”. This is called the “Diffusion of innovations theory”, a real agile transformation requires understanding the current culture, people and social context. Only follow a trend is not a guarantee.
8. **Ensure humans are not resources**: switch people in and out of a team is the worst practice. A team creates empathy, relation and a kind of safe space for the people. Another problem, increasing capacity does not increase productivity (again Brooks comes here with the mythical man-month). A person is not a resource, so change language. Keep teams small.

<a name="constant-priority-changes-and-new-requirements"></a>
## Constant priority changes and new requirements

If task priorities are constantly changing and the team has the ability to adapt quickly, a 1- or 2-week sprint may be more appropriate than a longer 4-week sprint. This would allow for more frequent check-ins and re-prioritization of tasks.

Another item to improve is the Backlog refinement. This is a technique in which the product backlog is reviewed and updated regularly to ensure that it reflects the current priorities and requirements. The team can work together to refine the backlog and reprioritize the items based on the changes in requirements.

Last and always useful is the Kanban board: Kanban is a visual management tool that helps to visualize the workflow and track the progress of work. It can be used to manage the tasks within a sprint and to respond to changes in priority by moving tasks around on the board.


<a name="better-agility"></a>
## Better Agility

IMHO main aspect to implement to create a better agility in a team are the following: 
1. common sense
2. Neatness and order
3. Software Engineering best practices
4. Agile Methodologies

**Common sense** dictates that developers should focus on delivering the most important features first and constantly communicate with stakeholders to ensure their needs are being met.

**Neatness and order** refer to maintaining a clean codebase and implementing clear processes for development and testing. This includes using version control, code reviews, and automated testing to ensure the codebase is clean and stable.

**Best practices in software engineering** such as design patterns, SOLID principles, and continuous integration and deployment (CI/CD) can help ensure that the code is maintainable, scalable, and easy to change over time.

By **combining** these elements, teams can achieve better agility, allowing them to respond quickly to changing business needs while still delivering high-quality software that meets stakeholder expectations.

The idea is not to sacrifice software engineering principles for the sake of agility, but rather to **incorporate agile practices in a way that reinforces good engineering practices**. This approach helps to create a balance between agility and engineering, allowing teams to be flexible and adaptive while also building software that is robust and sustainable over time.

<a name="kanban-when-scrum-fails?"></a>
## Kanban when Scrum fails?

While both Scrum and Kanban are Agile methodologies, they have different approaches and are suited for different types of projects and teams. Kanban is generally better suited for continuous delivery projects or support/maintenance teams, while Scrum is better suited for teams that work on product development with specific goals and deadlines.

If a Scrum sprint fails, it's important to analyze the reasons for the failure and address them directly. This may involve adjusting the team's processes or communication, revisiting the product backlog and prioritization, or addressing any technical or resource issues.

Switching to Kanban may be a solution in some cases, but it's not a guaranteed fix for Scrum issues.

<a name="the_perks_of_knowing_nothing_about_agile_and_scrum_conclusions"></a>
## The Perks of knowing nothing about Agile and Scrum. Conclusions

While there are certainly some disadvantages to not knowing anything about Agile and Scrum, there are also some potential benefits, such as:

1. **Fresh perspective**: Starting with no preconceived notions about Agile and Scrum allows us to approach the project with a fresh perspective, unencumbered by any pre-existing biases or assumptions. This can be especially helpful in situations where the project or team may have been struggling with Agile or Scrum in the past.

2. **Openness to learning**: Without any prior knowledge, we were more open to learning about Agile and Scrum, which help us to absorb new concepts and ideas more easily. This can also help with avoid some common misconceptions or pitfalls associated with Agile and Scrum, as you will not have any pre-existing ideas to unlearn.

3. **Flexibility**: By starting with a blank slate, we were more flexible in our approach to the project and adapt more easily to changing requirements or circumstances. This can be especially helpful in fast-paced or uncertain environments, where traditional project management methodologies may struggle to keep up.

Overall, while it is certainly helpful to have some knowledge and experience with Agile and Scrum, approaching a new project with an open mind and a willingness to learn can also have its advantages.

<a name="references"></a>
## References

- [Scrum: How to do twice as much in half the time, Jeff Sutherland, TEDxAix](https://youtu.be/s4thQcgLCqk)
- [Scrum Guide 2020](https://scrumguides.org/scrum-guide.html)
- [Scrum The Basics Course](https://www.linkedin.com/learning/scrum-the-basics)
- [The Agile Manifesto](https://agilemanifesto.org/)
- [The Scrum guide 2020](https://scrumguides.org/scrum-guide.html)
- [The Scrum Framework poster](https://www.scrum.org/resources/scrum-framework-poster)
- [How to Fix bad Agile Course](https://www.linkedin.com/learning/how-to-fix-bad-agile)
- [The role of the manager in modern agile projects, Alistair Cockburn](https://www.linkedin.com/posts/alistaircockburn_the-rold-of-the-manager-in-modern-agile-projects-activity-7033138672350744576-5oTc?utm_source=share&utm_medium=member_desktop)
- ChatGPT, google, books, Wikipedia for validate information and cross references.