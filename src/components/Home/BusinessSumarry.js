import { faAreaChart, faCertificate, faCoffee, faCommentMedical, faContactBook, faCross, faDivide, faExchange, faGlobe, faHandsClapping, faLightbulb, faLink, faListCheck, faMinus, faPeopleGroup, faSadCry, faScrewdriver, faSuperscript, faToolbox, faTools, faVialCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import business from '../../img/business.jpg'
const BusinessSumarry = () => {
    return (
        <div className='my-10'>




            <div class="hero min-h-screen" style={{
                backgroundImage: `url(${business})`
            }}>

                <div class="hero-overlay bg-opacity-80 ">
                    <div class="flex flex-col lg:mx-10">
                        <div class="grid  card place-items-center">
                            <h1 class="mt-5 text-5xl text-center text-white">Why chose us</h1></div>
                        <div class="divider text-white">
                            <FontAwesomeIcon icon={faMinus} size="x" />
                            <FontAwesomeIcon icon={faXmark} size="x" />
                            <FontAwesomeIcon icon={faMinus} size="x" />
                        </div>
                        <div class="grid  card  place-items-center text-white">
                            <p className='mx-10'>
                                Ever since, we have dedicated ourselves to making industrial Hand tools with the goal to become the best manufacturers of Hand Tools in Asia. Here’s some reasons why we’re unique</p> </div>

                        <div className='grid lg:grid-cols-3 mt-10 text-white'>

                            <div className=' items-center text-center mb-3'>
                                <div className='shadow bg-secondary p-6  rounded-xl avatar text-light'>
                                    <FontAwesomeIcon className='' icon={faLightbulb} size="5x" />
                                </div>

                                <h2 className='text-white text-xl my-6'>Expertise & Innovation</h2>
                                <p >Since 1978 we’ve been supplying the highest quality tools to a variety of specialist markets.</p>

                            </div>
                            <div>
                                <div className='items-center text-center mb-3'>
                                    <div className='shadow bg-secondary p-6  rounded-xl avatar text-light'>

                                        <FontAwesomeIcon className='' icon={faCertificate} size="6x" />
                                    </div>
                                    <h2 className='text-white text-xl my-6'>Quantity</h2>
                                    <p>We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.</p>

                                </div>
                            </div>
                            <div className='items-center text-center mb-3'>
                                <div className='shadow bg-secondary p-6  rounded-xl avatar text-light'>

                                    <FontAwesomeIcon icon={faScrewdriver} size="6x" />
                                </div>
                                <h2 className='text-white text-xl my-6'>Service & Support</h2>
                                <p>We have invested heavily to ensure that our products, processes and customer service are second to none..</p>
                            </div>

                        </div>
                    </div>




                    <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 text-white lg:my-10 sm:my-5 '>
                        <div className='text-center'>
                            <FontAwesomeIcon className='text-5xl my-3 text-accent ' icon={faGlobe} />
                            <h2 className='font-bold'>Distributors all over the world</h2>
                        </div>
                        <div className='text-center'>
                            <FontAwesomeIcon className='text-5xl my-3 text-accent ' icon={faPeopleGroup} />
                            <h2 className='font-bold'>served 1000+ customers</h2>
                        </div>
                        <div className='text-center'>
                            <FontAwesomeIcon className='text-5xl my-3 text-accent ' icon={faHandsClapping} />
                            <h2 className='font-bold'>33K+ Reviews</h2>
                        </div>
                        <div className='text-center'>
                            <FontAwesomeIcon className='text-5xl my-3 text-accent ' icon={faTools} />
                            <h2 className='font-bold'>100+ Tools</h2>
                        </div>

                    </div>
                </div>
            </div>


        </div >
    );
};

export default BusinessSumarry;