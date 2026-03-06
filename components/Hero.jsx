import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900 min-h-[80vh] flex items-center justify-center">
        <div className="px-4 py-8 mx-auto text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Design Agency</h1>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 max-w-2xl mx-auto">We create modern digital experiences</p>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-xl text-md px-6 py-3.5 text-center leading-5 transition-transform hover:scale-105">View Work</button>
        </div>               
    </section>

    </>
  );
}

export default Hero
