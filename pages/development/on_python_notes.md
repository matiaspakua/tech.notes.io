# Python

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
---

## Introduction

Ref curso de python Instituto Balseiro + INVAP: https://fiolj.github.io/intro-python-IB/clase_00.html


## Example

This is an example of the flexibility and easy user of python, where we solve a simple problem with a simple script in less than 5 minutes.

```python
# open both files
with open('swift-list.sql','r') as firstfile, open('swift-list-batch.sql','a') as secondfile:

    lineNumber = 1;
    insert_all = "INSERT ALL\n"
    select_batch = "SELECT 1 FROM dual;\n"

    # read content from first file
    for line in firstfile:
        # append content to second file
        if(lineNumber == 1):
            secondfile.write(insert_all)
        else:
            secondfile.write(line)

        lineNumber = lineNumber + 1;
        
        if(lineNumber % 1000 == 0):
            secondfile.write(select_batch)
            secondfile.write(insert_all)
```
