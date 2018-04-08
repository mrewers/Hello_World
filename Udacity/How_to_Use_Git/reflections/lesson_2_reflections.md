# Lesson 2 Reflections

**What happens when you initialize a repository? Why do you need to do it?**

When you initialize a repo, you identify it as a git repository. This creates a hidden git directory that stores the history and configurations for the repository.

**How is the staging area different from the working directory and the repository?
What value do you think it offers?**

The staging area is like a buffer, which denotes that files are done. You have finished changing them, so you move them out of your working directory, but haven't committed them to the permanent record of the repository.

**How can you use the staging area to make sure you have one commit per logical
change?**

Use git status and git diff to review what has changed. Group the changes that go together and combine those when you git add/git commit.

**What are some situations when branches would be helpful in keeping your history
organized? How would branches help?**

If you are working on multiple features or want to attempt to implement experimental code. Would also help when working with other team members on the same piece of code.

**Diagram:**
                       --coins<--(first coins)<--(helper fn)<--(coin coll.)<--(ships)
...(revert controls)--{
                       --master<--(fix typo)<--(ipad)<--(frame)<--(animation)<--(color)
                                                                                   |
                                                                                easy mode--(fragments)

**How do the diagrams help you visualize the branch structure?**

It helps to see how the branches relate to one another (i.e. where the split off/converge). Additionally, it helps you to trace back the commit history.

**What is the result of merging two branches together? Why do we represent it in
the diagram the way we do?**

Merging two branches together takes the changes applied to each an combines them.

**What are the pros and cons of Git's automatic merging vs. always doing merges
manually?**

Automatic merging is quicker and easier, but manually merges gives you greater control.
