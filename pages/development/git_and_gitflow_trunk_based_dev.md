# Git, GitFlow and trunk based development.

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

## Introduction

![git flow](../../images/git_flow.jpeg)

The model introduces a set of procedures for a managed software development process. It uses a central “truth” repository, referred to as origin. Each developer pulls and pushes to origin. Besides the centralized push-pull relationships, each developer may also pull changes from other peers to form sub-teams.

The central repository holds two main branches with an infinite lifetime: master and develop. The master branch at origin should be familiar to every Git user.

However, Driessen notes that if your team is doing continuous delivery of software, he would suggest adopting a much simpler workflow (like GitHub flow) instead of trying to shoehorn git-flow into your team. But if you are building software that is explicitly versioned, or if you need to support multiple versions of your software in the wild, then git-flow may still be a good fit.

The most important elements of the Git Flow approach are:

- **Central Repository**: The model uses a central “truth” repository, referred to as origin.
- **Pull and Push to Origin**: Each developer pulls and pushes to origin.
- **Sub-teams**: Besides the centralized push-pull relationships, each developer may also pull changes from other peers to form sub-teams.
- **Master and Develop Branches**: The central repository holds two main branches with an infinite lifetime: master and develop.
- **Master Branch**: The master branch at origin should be familiar to every Git user.
- **Develop Branch**: This is where developers can add new features without disturbing the master branch.
- **Feature Branches**: These are used to develop new features for the upcoming or a distant future release.
- **Release Branches**: These support preparation of a new production release.
- **Hotfix Branches**: These are very much like release branches in that they are also meant to prepare for a new production release, albeit unplanned.

## References

Vinvent Driessen Original idea: https://nvie.com/posts/a-successful-git-branching-model/