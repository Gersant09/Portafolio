import React from 'react'

const Philosophy = () => {
    return (

        <section className='max-w-[1000px] mx-auto text-white sm:grid sm:grid-cols-2 md:relative'>

{/*<article className='absolute'>
                <img className='md:hidden grid relative opacity-50 ' src="/images/Ellipse1.png" alt="" />
                <img className='hidden  md:flex md:items-center md:max-w-[500px] md:justify-center md:mx-auto  md:w-full md:h-[500px] md:object-cover md:opacity-50' src="/images/Ellipse2.png" alt="" />

    </article>*/}

            <article className='sm:grid sm:content-between border-[3px] border-gray-700 bg-gray-950 py-10 px-2 grid gap-12 max-w-max rounded-lg'>
                <div>
                    <h3 className='text-2xl font-bold mb-4'>Philosophy & values</h3>
                    <p className='text-gray-400'>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                </div>

                <a className='border-b-2 border-gray-700 max-w-max mb-1' href="#">Check my LinkedIn</a>

            </article>

            <article>
                <img className='md:hidden' src="/images/image1.png" alt="" />
                <img className='hidden md:grid md:max-w-[500px] md:justify-center md:mx-auto md:w-full md:h-[500px] md:object-cover' src="/images/Group82.png" alt="" />

            </article>

        </section>
    )
}

export default Philosophy
