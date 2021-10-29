# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Functional just accept data and display them in some form, where in stateful, you implement logic and state using classes.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called before the render method is executed.
componentWillUpdate is called when a component is about to be updated.

3. Define stateful logic.

It's basically any code that uses state. Like using hooks, we can use them to change the behavior of the state.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange - find the overall thing you are rendering and what you are grabbing
Act - Find a smaller component inside of the arranging and do something with it, whether it be typing something in an input field or clicking a button
Assert - Verify that it works as intended, using expect.

