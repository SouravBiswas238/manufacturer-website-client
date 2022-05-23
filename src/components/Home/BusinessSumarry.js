import { faCoffee, faCommentMedical, faContactBook, faCross, faExchange, faSadCry, faSuperscript, faToolbox } from '@fortawesome/free-solid-svg-icons';
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

                    <div class="flex flex-col lg:mx-10 border-opacity-10">
                        <div class="grid  card rounded-box place-items-center">  <h1 class="mt-5 text-5xl text-center text-white">Why chose us</h1></div>
                        <div class="divider text-white">
                            <FontAwesomeIcon icon={faToolbox} size="lg" />


                        </div>
                        <div class="grid  card rounded-box place-items-center text-white"><p>
                            Ever since, we have dedicated ourselves to making industrial Hand tools with the goal to become the best manufacturers of Hand Tools in India. Here’s some reasons why we’re unique</p> </div>

                        <div className='grid grid-cols-3  mt-10 text-white'>
                            <div className='text-center'>
                                <div className='shadow text-secondary rounded-3xl avatar'>

                                    <FontAwesomeIcon className='w-24 rounded-5xl' icon={faExchange} size="6x" />
                                </div>

                                <h2 className='text-white text-xl my-6'>Expertise & Innovation</h2>
                                <p >Since 1978 we’ve been supplying the highest quality tools to a variety of specialist markets.</p>

                            </div>
                            <div>
                                <div className='text-center'>
                                    <div className='shadow text-secondary rounded-3xl avatar'>

                                        <FontAwesomeIcon className='w-24 rounded-5xl' icon={faSuperscript} size="6x" />
                                    </div>
                                    <h2 className='text-white text-xl my-6'>Quantity</h2>
                                    <p>We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.</p>

                                </div>

                            </div>
                            <div className='text-center'>
                                <div className='shadow text-secondary rounded-3xl avatar'>

                                    <FontAwesomeIcon className='w-24 rounded-5xl' icon={faCommentMedical} size="6x" />
                                </div>
                                <h2 className='text-white text-xl my-6'>Service & Support</h2>
                                <p>We have invested heavily to ensure that our products, processes and customer service are second to none..</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default BusinessSumarry;