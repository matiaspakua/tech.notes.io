# Waterfall. The misunderstood concept in software engineering

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
- [18. Waterfall. The misunderstood concept in software engineering](#18-waterfall-the-misunderstood-concept-in-software-engineering)
  - [Table of content](#table-of-content)
  - [The wrong meaning](#the-wrong-meaning)
  - [The True meaning](#the-true-meaning)
  - [References](#references)

## The wrong meaning

"Managing the Development of Large Software Systems" is a paper published in 1970 by Winston W. Royce, which outlines a traditional sequential software development process that is sometimes referred to as the "Waterfall" model. The paper describes a linear approach to software development, where each phase of the development process (requirements, design, implementation, testing, and maintenance) is completed before the next phase can begin.

Royce presents this model as a response to the increasing complexity of software projects and the need for a structured, disciplined approach to software development. However, he acknowledges the limitations of this approach, particularly when it comes to dealing with changing requirements or unexpected issues.

Overall, the paper is an important historical document in the field of software engineering, as it helped to establish the Waterfall model as a widely accepted approach to software development. However, it has also been criticised for its inflexibility and its failure to account for the 
iterative and collaborative nature of modern software development.

## The True meaning

The paper "Managing the Development of Large Software Systems" by Winston Royce is often cited as the origin of the Waterfall model, but it actually critiques the Waterfall model as being too rigid and not suitable for most software projects.

In the paper, Royce argues that a more iterative and incremental approach is needed for large software projects, which would involve feedback loops and continual reassessment and modification of requirements and design. This approach is more similar to modern agile methodologies, which emphasize adaptability and collaboration.

The paper presented a sequential, non-iterative model for software development. However, was often misunderstood to promote the idea of a rigid, inflexible, and linear development process that must be followed in a strict order. This was not the intention of the author, who actually stated that the model was risky and recommended additional feedback loops and iterations.

The waterfall model was never intended to be a prescription for software development, but rather a model to illustrate the stages that a software development project goes through. It was meant to be used as a starting point for discussions about the development process, and to help managers understand the risks associated with each stage. However, the model was often taken out of context and used as a strict set of guidelines, leading to a misunderstanding of its intended purpose. This misunderstanding contributed to the development of more flexible and iterative approaches to software development, such as Agile methodologies.

So, in summary, the paper critiques the Waterfall model and advocates for a more iterative and incremental approach, which aligns with modern agile methodologies.

## Summary on the paper

[Original paper]([41765.41801 (acm.org)](https://dl.acm.org/doi/pdf/10.5555/41765.41801))

This article is about managing the development of large software systems. The author, Dr. Winston W. Royce, shares his personal views and experiences on how to achieve success in this challenging field. He proposes a five-step process that he believes can reduce the risks and costs of software development. Here are the main points of his article:

- **Program design comes first**: The author suggests that a preliminary program design should be done before analysis and coding, based on the initial software requirements. This way, the program designer can ensure that the software will not fail due to storage, timing, or data flux issues. The program design should also be documented and communicated to the analysts and programmers.
- **Document the design**: The author emphasizes the importance of documentation for software development. He argues that documentation is essential for communication, specification, and testing. He also claims that good documentation can save money and time in the long run, by allowing the use of test specialists, operation-oriented personnel, and effective redesign. He estimates that a 5 million dollar software project would require about 1,500 pages of documentation.
- **Do it twice**: The author recommends building a pilot model of the software before the final version, in order to simulate the critical design and operation areas. He says that this can help to uncover and solve problems that are not easily analyzable, such as timing, storage, and data flux. He also says that this can reduce the dependence on human judgment, which is often optimistic and inaccurate.
- **Plan, control and monitor testing**: The author acknowledges that testing is the most resource-intensive and risky phase of software development. He suggests some steps to improve the testing process, such as using test specialists, performing visual inspection, testing every logic path, and using the computer for final checkout. He also says that testing should be planned and staffed differently from analysis and coding.
- **Involve the customer**: The author advises involving the customer in a formal way throughout the software development process, in order to avoid misunderstandings and disagreements. He says that the customer should commit himself to the software requirements, the preliminary program design, and the final product. He also says that the customer should be informed of the trade-offs and constraints involved in the software design.

## References

[Managing the Development of Large Software Systems by Winston Royce](http://www-scf.usc.edu/~csci201/lectures/Lecture11/royce1970.pdf)