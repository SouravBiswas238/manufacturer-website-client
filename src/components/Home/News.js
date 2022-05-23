import React from 'react';

const News = () => {
    return (
        <div>
            <div className='divider'></div>
            <h1 className='text-3xl text-bold text-center text-secondary py-5 '>News</h1>

            <div className='grid grid-cols-3 gap-4 mx-10'>
                <div class="card  shadow-xl">
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
            </div>
        </div>
    );
};

export default News;