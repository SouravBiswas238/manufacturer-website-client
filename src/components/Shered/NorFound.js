import React from 'react';
import notFound from '../../img/404.jpg'

const NorFound = () => {
    return (
        <div className='w-100 px-5 mx-5'>



            <figure><img className='w-full' src={notFound} alt="NotFound" /></figure>


        </div>

    );
};

export default NorFound;