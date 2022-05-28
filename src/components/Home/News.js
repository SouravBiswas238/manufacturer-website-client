import React from 'react';

const News = () => {
    return (
        <div>
            <div className='divider'></div>
            <h1 className='text-3xl text-bold text-center text-secondary pb-5 '>News</h1>


            <div class="carousel carousel-center rounded-box">

                <div class="carousel-item">
                    <div class="card w-96 mx-5 shadow-xl">
                        <figure><img src="https://img.freepik.com/free-photo/christmas-wreath-with-festive-ornaments-dark-surface_114579-79088.jpg?w=2000" alt="vacation" /></figure>
                        <div class="card-body text-center">
                            <h2 class="text-xl font-bold">CHRISTMAS & NEW YEAR BREAK</h2>
                            <p>We kindly inform you that Itatools will be closed for Christmas and New Year Holiday from December 24rd to January 6th, 2021 included. Wishing You Merry</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-outline btn-sm">read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card  mx-5 w-96 shadow-xl">
                        <figure><img src="https://www.dealsinsight.com/wp-content/uploads/2020/09/webinar.jpg" alt="Shoes" /></figure>
                        <div class="card-body text-center">
                            <h2 class="text-xl font-bold">ITA- WEBINARS</h2>
                            <p>Do you want to learn more about our company and our products? Now You can also join our ITA webinars. Contact us for more details</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-outline btn-sm">read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card  w-96 mx-5  shadow-xl">
                        <figure><img src="https://bitschool.edu.bd/wp-content/uploads/2019/08/Summer-Vacation.jpg" alt="Shoes" /></figure>
                        <div class="card-body text-center">
                            <h2 class="text-xl font-bold">SUMMER HOLIDAYS!</h2>
                            <p>Itatools will be closed for Summer Holidays from August 9th to August 20th. Itatools sarà chiusa per ferie dal 9 al 20 Agosto</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-outline btn-sm">read more</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className='grid lg:grid-cols-3 gap-4 mx-10'>
             
                <div class="card   shadow-xl">
                    <figure><img src="https://bitschool.edu.bd/wp-content/uploads/2019/08/Summer-Vacation.jpg" alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-xl font-bold">SUMMER HOLIDAYS!</h2>
                        <p>Itatools will be closed for Summer Holidays from August 9th to August 20th. Itatools sarà chiusa per ferie dal 9 al 20 Agosto</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-outline btn-sm">read more</button>
                        </div>
                    </div>
                </div>
                <div class="card   shadow-xl">
                    <figure><img src="https://bitschool.edu.bd/wp-content/uploads/2019/08/Summer-Vacation.jpg" alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-xl font-bold">SUMMER HOLIDAYS!</h2>
                        <p>Itatools will be closed for Summer Holidays from August 9th to August 20th. Itatools sarà chiusa per ferie dal 9 al 20 Agosto</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-outline btn-sm">read more</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default News;