"use client"

import React from 'react'
import style from './Details.module.css'
const Details = () => {
    return (
        <>
            <h1 className={`text-center text-5xl font-bold mt-16 ${style.mainHeading}`}>Our Specialty.</h1>
            <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        
                    <div className="relative overflow-hidden group">
                        <img src="/Assets/our-speciality/pakistani.jpg" alt="Initial" className="w-full h-auto transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
                            <p className={`text-orange-500 text-center px-4 py-2 font-bold sm:text-lg lg:text-2xl ${style.cardHeading}`}>Pakistani Traditionals</p>
                            <p className={`text-orange-400 text-center px-4 sm:text-lg lg:text-base ${style.cardDescription}`}> We excel in making traditional Pakistani dishes </p>
                            <button className="bg-orange-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">View Menu</button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img src="/Assets/our-speciality/chinesse.jpg" alt="Initial" className="w-full h-auto transition-opacity duration-500" />


                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
                            <p className={`text-orange-500 text-center px-4 py-2 font-bold sm:text-lg lg:text-2xl ${style.cardHeading}`}>Chines Cruisine</p>
                            <p className={`text-orange-400 text-center px-4 sm:text-lg lg:text-base ${style.cardDescription}`}> We make finger licking chinese traditionals for our consumers </p>
                            <button className="bg-orange-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">View Menu</button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img src="/Assets/our-speciality/desserts.jpg" alt="Initial" className="w-full h-auto transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
                            <p className={`text-orange-500 text-center px-4 py-2 font-bold sm:text-lg lg:text-2xl ${style.cardHeading}`}>Dessert Attack</p>
                            <p className={`text-orange-400 text-center px-4 sm:text-lg lg:text-base ${style.cardDescription}`}> Our dessert will not let you leave our restaurant </p>
                            <button className="bg-orange-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">View Menu</button>
                        </div>
                    </div>

                   
                    <div className="relative overflow-hidden group">
                        <img src="/Assets/our-speciality/italian.jpg" alt="Initial" className="w-full h-auto transition-opacity duration-500" />

                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
                            <p className={`text-orange-500 text-center px-4 py-2 font-bold sm:text-lg lg:text-2xl ${style.cardHeading}`}>Italiano</p>
                            <p className={`text-orange-400 text-center px-4 sm:text-lg lg:text-base ${style.cardDescription}`}> We have professional cooks to serve you italian foods </p>
                            <button className="bg-orange-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">View Menu</button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img src="/Assets/our-speciality/fastfood.jpg" alt="Initial" className="w-full h-auto transition-opacity duration-500" />

                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
                            <p className={`text-orange-500 text-center px-4 py-2 font-bold sm:text-lg lg:text-2xl ${style.cardHeading}`}>Fast foods</p>
                            <p className={`text-orange-400 text-center px-4 sm:text-lg lg:text-base ${style.cardDescription}`}> Addition to this we have fast food items </p>
                            <button className="bg-orange-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">View Menu</button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img src="/Assets/our-speciality/refreshments.jpg" alt="Initial" className="w-full h-auto transition-opacity duration-500" />

                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
                            <p className={`text-orange-500 text-center px-4 py-2 font-bold sm:text-lg lg:text-2xl ${style.cardHeading}`}>Refreshers</p>
                            <p className={`text-orange-400 text-center px-4 sm:text-lg lg:text-base ${style.cardDescription}`}> You can enjoy starters before moving to the main course </p>
                            <button className="bg-orange-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">View Menu</button>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default Details