# IntelliJ tips

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


## Important Tips

- How to change the method signature and add a default value for the new parameter using the refactoring tool.
- How to introduce a parameter from a literal or a formula and how to inline a parameter if all the callers pass the same argument.
- How to introduce a parameter object to group together some parameters that are passed along many methods and how to reuse an existing parameter object
- How to extract a method from a piece of code and how to inline a method back into the caller.
- How to move a method into a parameter or a dependency to improve the design and cohesion of the code.
- How to encapsulate a field and generate getters and setters for it.
- How to extract a variable from a complex expression and how to use the syntax aware selection to choose the right scope.
- How to extract a delegate to create a new class from a method and move it into a dependency.

## References
[Victor Rentea talk](https://www.youtube.com/live/VIofGx85kTY?feature=share)