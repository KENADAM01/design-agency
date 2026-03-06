import React from 'react'

const ServiceCard = ({title, desc, img}) => {
  return (
    <>
    <div className="flex justify-center h-full w-full">
        <div className="bg-white dark:bg-gray-800 flex flex-col justify-between w-full max-w-sm border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
            <a href="#">
                <img className="w-full h-48 object-cover" src={img} alt={title} />
            </a>
            <div className="p-6 text-center flex flex-col items-center flex-1">
                <a href="#">
                    <h5 className="mt-3 mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-6 font-normal text-gray-500 dark:text-gray-400">{desc}</p>
                </a>
                <a href="#" className="inline-flex items-center mt-auto text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-xl text-sm px-5 py-2.5 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition-colors">
                    <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceCard