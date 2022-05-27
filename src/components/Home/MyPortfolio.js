import React from 'react';
import profile from '../../img/sourav1.jpg'

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen"
                style={{
                    backgroundImage: `url(${profile})`
                }}>
                <div class="hero-overlay bg-opacity-50"></div>
                <div class="hero-content text-center text-neutral-content">

                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Name: Sourav Kumar Biswas</h1>
                        <h2>Email: <span>souravbiswas427@gmail.com</span></h2>
                        <h2>Education:</h2>

                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyPortfolio;