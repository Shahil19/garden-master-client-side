import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-2xl font-medium text-center'>MyPortfolio</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content ">
                    <div class=" text-center">
                        <h3 class="text-2xl md:text-4xl font-semibold">Name: Md. Iffthekhar Bashar Shahil</h3>
                        <p class="pb-6 pt-3 text-xl">Email: basharshahil19@gmail.com</p>
                        <p class="pb-2 text-xl">Educational background: </p>
                        <p class="pb-2 text-xl">Currently studying in University of Chittagong <small>(Honors First Year)</small> </p>
                        <p class="pb-2 text-xl">Completed my inter education in Birganj Government College</p>

                        <h3 class="pb-2 text-3xl mt-8 font-medium">Skills I have as a Web developer</h3>
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Technology</th>
                                        <th>For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- row 1 --> */}
                                    <tr>
                                        <th>1</th>
                                        <td>HTML</td>
                                        <td>For the structure of website</td>
                                    </tr>
                                    {/* <!-- row 2 --> */}
                                    <tr>
                                        <th>2</th>
                                        <td>CSS</td>
                                        <td>For the beauty of website</td>
                                    </tr>
                                    {/* <!-- row 3 --> */}
                                    <tr>
                                        <th>3</th>
                                        <td>Bootstrap and Tailwind</td>
                                        <td>Ass a css Library</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>Javascript</td>
                                        <td>For the functionality of a website</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>React JS</td>
                                        <td>As Javascript Library</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>Node JS</td>
                                        <td>For the Backend functionalities </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="pb-2 text-3xl mt-8 font-medium text-center">Some Of My Projects</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div class="card w-full bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Shared Soft Website</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-end">
                                        <a href='https://shared-soft.web.app/' class="btn btn-primary">Live Site</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card w-full bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Doctors portal</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-end">
                                        <a href='https://doctors-portal-f354e.web.app/' class="btn btn-primary">Live Site</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card w-full bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Pump House</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-end">
                                        <a href='https://pump-house-shaahil.web.app/' class="btn btn-primary">Live Site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;