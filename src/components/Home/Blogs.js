import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='grid grid-cols-3'>

                <div>
                    <p>

                        To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.
                    </p>
                    <p>
                        Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;