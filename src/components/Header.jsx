import React from 'react'

const Header = () => {
    return (
        <section className='text-white md:grid md:grid-cols-[1fr_2fr] md:min-h-[500px] md:max-w-[1000px] mx-auto '>



            <div className='md:relative'>
            
                <img className='w-full md:absolute md:top-1/2 md:-translate-y-1/2  md:max-w-none ' src="/images/header.jpeg" alt="" />
            </div>

            <section className='px-2 py-10 bg-gray-d md:grid md:place-content-center md:px-10 md:max-h-[475px] border-[2px] border-green-d md:rounded-full'>

                <h2 className='text-3xl font-bold md:text-5xl md:relative md:z-20 '>I’m Gersant.
                    A fronted developer 
                     <span className='text-green-d'> based in Colombia/Medellin.</span></h2>                    

                <p className='mt-4 md:mt-10 md:relative md:z-20 '>I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>


            </section>

        </section>
    )
}

export default Header
