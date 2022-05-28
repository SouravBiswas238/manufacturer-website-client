import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 bg-base-100'>

                <div className='p-2'>
                    <h2 className='font-bold text-xl text-primary'> How will you improve the performance of a React Application?</h2>
                    <p className=''>
                        We need to make sure that components received only necessary props.it will let you control the CPU consumption and avoid ever rerendering unnecessary . We have to use function Components that collect all props and  redistribute them to other components
                    </p>
                    <ul className='text-secondary menu  p-2'>
                        <li>
                            Keeping component state local where necessary.
                        </li>
                        <li>
                            Memoizing React components to prevent unnecessary re-renders.

                        </li>
                        <li>
                            Code-splitting in React using dynamic import()
                        </li>
                        <li>
                            Windowing or list virtualization in React.
                        </li>
                        <li>
                            Lazy loading images in React.
                        </li>
                    </ul>
                </div>

                <div className='p-2'>
                    <h2 className='font-bold text-xl text-primary'> What are the different ways to manage a state in a React application?</h2>
                    <p className=''>
                        5 Types of Application State in React and How They Help in State Management
                    </p>

                    <div className='text-sm'>
                        <p className='bg-base-200 my-2'>
                            <span className='bg-secondary'>Local state – </span> Local state is data we manage in one or another component.
                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                        </p>
                        <p>
                            <span className='bg-secondary'> Global state – </span>
                            Global state is data we manage across multiple components.Example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                        </p>
                        <p className='bg-base-200 my-2'>
                            <span className='bg-secondary'>Server state – </span>

                            Data that comes from an external server that must be integrated with our UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                        </p>

                        <p>
                            <span className='bg-secondary'> URL state – </span>
                            Data that exists on our URLs, including the pathname and query parameters.

                        </p>

                    </div>







                </div>
                <span class="divider"></span>
                <span class="divider"></span>
                <div className='p-2'>
                    <h2 className='font-bold text-xl text-primary'> How does prototypical inheritance work?</h2>
                    <p className='my-3'>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                    </p>

                    <div className='text-sm'>
                        <p className='bg-base-200'>
                            When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
                        </p>
                    </div>

                </div>
                <div className='p-2'>
                    <h2 className='font-bold text-xl text-primary'> Why you do not set the state directly in React.?</h2>
                    <p className='my-3'>
                        When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value
                    </p>

                </div>
                <span class="divider"></span>
                <span class="divider"></span>

                <div className='p-2'>
                    <h2 className='font-bold text-xl text-primary'>How will you implement a search to find array products by name?</h2>
                    <p className='my-3'>
                        We can use includes method to fiend a specific value.It will send you a product of specific name.
                    </p>

                    <div className='text-sm'>
                        <p className='bg-base-200'>
                            Also we can use filter method, filter() method returns a new array of all the values in an array that matches the conditions of a function. If there is no match, the method returns an empty array.
                        </p>
                    </div>

                </div>
                <div className='p-2'>
                    <h2 className='font-bold text-xl text-primary'>What is a unit test? Why should write unit tests?</h2>
                    <p className='my-3'>
                        Unit testing, a testing technique using which individual modules are tested to determine if there are any issues by the developer himself. It is concerned with functional correctness of the standalone modules.
                    </p>
                    <p className='my-3'>
                        One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.
                    </p>



                </div>
            </div>

        </div>
    );
};

export default Blogs;