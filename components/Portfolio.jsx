import React from 'react'
import PortfolioCard from './PortfolioCard.jsx'
const Portfolio = () => {
    const projects = [
  {
    title: "Ecommerce Website",
    img: `${import.meta.env.BASE_URL}img/e.jpg`,
  },
  {
    title: "Startup Landing Page",
    img: `${import.meta.env.BASE_URL}img/f.jpg`,
  },
  {
    title: "Mobile App UI",
    img: `${import.meta.env.BASE_URL}img/m.jpg`,
  },
];
  return (  
    <section className="bg-white dark:bg-gray-900 py-16">
      <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">Portfolio</h1>

      <div className="flex flex-wrap justify-center gap-8 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio