import React from 'react'
import ServiceCard from './ServiceCard.jsx'

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "UI (User Interface) is what you see and touch—the colors, buttons, and layout of an app or website. UX (User Experience) is how it feels—how easy or satisfying it is to use",
    },
    {
      title: "Web Development",
      desc: "Web development involves building and maintaining websites/applications via front-end (user-facing, HTML/CSS/JS) and back-end (server-side, databases, APIs) technologies  ",
    },
    {
      title: "Branding",
      desc: "Branding is the process of creating a unique name, design, and image for a product, service, or company. It’s what makes a brand recognizable and sets it apart from competitors",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <h1 className="text-center mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">Our Services</h1>

      <div className="flex flex-wrap justify-center gap-8 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services