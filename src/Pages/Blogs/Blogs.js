import React from 'react';

const Blogs = () => {
    return (
        <div className='header container px-12 my-24'>
            <h1 className='text-3xl font-bold text-primary'>Question: What are the different ways to manage a state in a React application?</h1>
            <h3 className='font-normal text-lg'>Answer:  There are four main types of state you need to properly manage React apps:
                <br />
                1. Local state <br />
                2. Global state <br />
                3. Server state <br />
                4. URL state <br />


                Local (UI) state – Local state is data we manage in one or another component.

                Local state is most often managed in React using the useState hook.

                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.  <br />

                Global (UI) state – Global state is data we manage across multiple components.

                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                Sometimes state we think should be local might become global.<br />

                Server state – Data that comes from an external server that must be integrated with our UI state.

                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                Fortunately there are tools such as SWR and React Query that make managing server state much easier.<br />

                URL state – Data that exists on our URLs, including the pathname and query parameters.

                URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
            </h3><br />

            <h1 className='text-3xl font-bold text-primary'>Question: How does prototypical inheritance work?</h1>
            <h3 className='font-normal text-lg'>Answer: Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.

                Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

                All JavaScript objects inherit properties and methods from a prototype: <br />

                Date objects inherit from Date.prototype.<br />
                Array objects inherit from Array.prototype.<br />
                Player objects inherit from Player.prototype.<br />
                The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.

            </h3><br />

            <h1 className='text-3xl font-bold text-primary'>Question: What is a unit test? Why should we write unit tests?</h1>
            <h3 className='font-normal text-lg'>Answer: A unit test is a type of software testing where individual units or components of a software application are tested independently to verify their correctness and ensure they work as expected. A unit in this context refers to the smallest testable part of an application, such as a function, method, or class. Unit tests are typically written by developers and are executed in isolation, without any dependencies on external systems or components.<br />
                Now, let's discuss why writing unit tests is important:

                Bug Detection and Prevention: Unit tests help identify bugs and issues at an early stage of development. By verifying the correctness of individual units, developers can catch and fix errors before they propagate to other parts of the application.
                <br />
                Code Quality: Writing unit tests often leads to better code quality. The act of creating testable code encourages developers to write modular, well-structured, and maintainable code.
                <br />
                Refactoring Safety: Unit tests act as a safety net when refactoring or making changes to the codebase. When you refactor code, you can run the unit tests to ensure that the changes have not introduced any regressions.
                <br />
                Documentation: Unit tests serve as living documentation for the codebase. They provide clear examples of how individual units are supposed to behave, making it easier for new developers to understand the code.
                <br />
                Collaboration and Confidence: Unit tests promote collaboration among team members. When someone makes changes to a unit, running the relevant unit tests gives confidence that the changes did not break existing functionality.
                <br />
                Continuous Integration and Deployment: In a CI/CD workflow, unit tests play a crucial role. They are executed automatically whenever code is pushed, ensuring that new changes integrate well with the existing codebase before deployment.
                <br />
                Regression Testing: Unit tests serve as regression tests, ensuring that previously resolved issues do not reappear as development continues.
                <br />
                Reduced Debugging Time: Unit tests can save time during debugging. When a unit test fails, it provides a clear indication of where the problem lies, making it easier to locate and fix the issue.

                Overall, writing unit tests is a best practice in modern software development. It helps ensure code correctness, maintainability, and reliability, leading to a more robust and stable application.


            </h3> <br />

            <h1 className='text-3xl font-bold text-primary'>Question: React vs. Angular vs. Vue?</h1>
            <h3 className='font-normal text-lg'>Answer: <br /> Angular vs React <br />
If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
<br />
React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
<br />
React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
<br />
React vs Vue<br />
The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.
<br />
Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
<br />
Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
<br />
Angular vs Vue<br />
In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.
<br />
A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.


</h3>
        </div>
    );
};

export default Blogs;