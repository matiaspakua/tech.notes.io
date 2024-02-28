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

# Sustainable Software Architecture
## Software architecture and sustainability

- **Software architecture**: the structure of a software product, consisting of elements, their externally visible properties, and their relationships.

-> Important to notice that EVERY software has a architecture underline.

- **Software archeology**: the process of recovering the original architecture of a software product from the source code, when it is not documented or known.

![](../../images/software_archeology.jpeg)

- **Sustainability**: the ability of a software product to live a long time without requiring much change, resulting in lower maintenance and expansion costs.
- **Technical debt**: the additional effort required at a later point in time due to suboptimal technical decisions made during software development, whether consciously or unconsciously.
- **Technical debt**: arises when false or suboptimal technical decisions are made, whether consciously or unconsciously. This leads to additional effort at a later point in time, which delays maintenance and expansion.
- **Adobe Flash Player**: an example of a technology that was once popular but is now outdated. The decision not to replace it when signs of its impending obsolescence became clear is an example of a conscious suboptimal technical decision.
- **Ignorance**: a team charged with development may not know how to build a good software architecture, leading to technical debt.
- **Creeping process**: as a system gets more complex and larger over time, it would need new rework structures, i.e., an architecture that is appropriate for its size and complexity. If this is not noticed or acted upon, it leads to technical debt.
- **Unplannable process**: software development is an unplannable process over a long period of time. The new software usually changes business processes and has effects when integrating into the target organization that are rarely fully predictable.
- **Sustainable software architecture**: to achieve this, one should take care to have as little technical debt as possible. It should be maintainable and extensible.
- **Comic "technicaldebts.xls"**: a humorous illustration of how technical debt is often handled in practice, with issues simply being logged in a spreadsheet rather than being addressed.

## Origin of tech debt

- Old technology (libraries, frameworks, SDK and on)
- Lack of knowledge on software architecture
- Complex or big systems.
- Lack of knowledge of business and clients (final users).

And important concept to notice is that "software development" is unplannable (cannot be planned in advance).

## Side Effects of tech debt

 1) Types of technical debt
 2) Architecture erosion
 3) high-cost of mantainance (bugfix, add new feature, overall mantainance)
 4) Continuos refactorings, improvements and related tasks

The graphic below show how the evolution of technical debt affect the evolution of a software product:

![](../../images/impact_technical_debt.png)


-> In the "Ideal World" we are situated at the bottom, where we had a team capacity and with each change or new feature, we can improve or fix a little of the architecture.

### Test Coverage



## Cycles create technical debt

![](../../images/big_ball_of_mud.png)


# Reference:

 - https://www.linkedin.com/learning/sustainable-software-architecture
 - 
