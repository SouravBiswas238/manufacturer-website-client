import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../img/sourav1.jpg';
import web1 from '../../img/web-1.png'
import web2 from '../../img/web-2.png'
import web3 from '../../img/web-3.png'

const MyPortfolio = () => {


    const handelFitness = () => {
        window.open("https://sourav-fitness-9eac5.web.app");
    };
    const handleBike = () => {
        window.open("https://bike-directory-f4269.web.app");
    };
    const handleCamera = () => {
        window.open("https://lively-gaufre-b8f2b9.netlify.app/");
    };


    return (
        <div>
            <div class="hero min-h-screen"
                style={{
                    backgroundImage: `url(${profile})`
                }}>
                <div class="hero-overlay bg-opacity-80"></div>
                <div class="hero-content  text-neutral-content">

                    <div class="lg:max-w-md sm:max-w-xs">
                        <h1 className='mb-3 text-3xl font-bold'>I am  Sourav Kumar Biswas</h1>
                        <h2 className=' text-xl font-bold mb-5 '><span className='text-success'> Email📧-- </span> <span>souravbiswas427@gmail.com</span></h2>
                        <h2 className='mb-4'><p className='text-bold text-2xl text-success'>Education:</p>
                            I passed my HSC-2019 at Dariapur Degree Colege, Now I am studying in the Dept Of Computer Science Engineering(CSE) at Faridpur Engineering College.
                        </h2>

                        <p class="mb-5"><p className='text-bold text-xl text-success'>I have skills on: </p>
                            ✔️ React JS <p> (DaisiUi,reactQuary,ReactBootstrap,
                                ReactHooks,FirebaseAuthentication,
                                ,react Fontawsome,reactRouter)</p>
                            ✔️ Node JS
                            ✔️ Express JS
                            ✔️ Mongo DB
                            ✔️ Bootstrap
                            ✔️ Tailwind CSS
                            ✔️ JavaScript
                            ✔️ C, etc
                        </p>
                    </div>
                </div>
            </div>

            <div class="carousel carousel-center rounded-box">

                <div class="carousel-item">
                    <div class="card w-96 mx-5 shadow-xl">
                        <figure>
                            <img src={web1} alt='web3' />
                        </figure>
                        <div class="card-body text-center">
                            <h1 class="text-2xl font-bold">Sourav Fitness</h1>
                            <p class="py-6">It is aportfolio of an Jim trainer.Who offer people in a perticular away. Here i used react-router, react-bootstrap,firebase for authentication,</p>

                            <div class="card-actions justify-end">
                                <button onClick={handelFitness} className='btn btn-sm px-5 button-outline'>View website</button>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card w-96 mx-5 shadow-xl">
                        <figure>
                            <img src={web2} alt='web3' />
                        </figure>
                        <div class="card-body text-center">
                            <h1 class="text-xl font-bold">Bike Directory</h1>
                            <p class="py-6">This is bike directory ,a bike diller website
                                bikes can be added in this website,
                                a user can delete service
                                also add some service and manage
                                add quantity and also contact</p>

                            <div class="card-actions justify-end">
                                <button onClick={handleBike} className='btn btn-sm px-5 button-outline'>view website</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card w-96 mx-5 shadow-xl">
                        <figure>
                            <img src={web3} alt='web3' />
                        </figure>
                        <div class="card-body text-center">
                            <h2 class="text-xl font-bold">Camera review Website</h2>
                            <p >Your best Camera is Here
                                Buy Your First Choice.Here you chose
                                a description and a retting.Also uses
                                of rechart on Investment vs review</p>
                            <div class="card-actions justify-end">
                                <button onClick={handleCamera} className='btn btn-sm px-5 button-outline'>view website</button>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div >
    );
};

export default MyPortfolio;