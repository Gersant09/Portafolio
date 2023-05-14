import React from 'react'

const Work = () => {
    return (
        <section className='text-white py-12 px-2 max-w-[1000px] mx-auto'>

            <h3 className='uppercase text-sm font-semibold text-gray-400'>Work experience</h3>

            <h2 className='text-3xl font-bold mt-2'>Companies I have worked for in the past</h2>

            <section className='grid gap-12 mt-12 sm:grid-cols-3'>

                <article>

                    <span className='text-8xl text-gray-400'>01</span>

                    <h3 className='text-xl font-semibold mb-4'><span className='text-green-500 font-semibold '>Google</span>, Interaction designer</h3>

                    <p className='text-sm'>I currently am the lead designer on the interaction design team for Google Play.</p>

                </article>

                <article>

                    <span className='text-8xl text-gray-400'>02</span>

                    <h3 className='text-xl font-semibold mb-4'><span className='text-blue-500 font-semibold '>Facebook</span>, Product designer</h3>

                    <p className='text-sm'>I’ve worked on a wide variety of internal tools for facebook over the past 6 years.</p>

                </article>

                <article>

                    <span className='text-8xl text-gray-400'>03</span>

                    <h3 className='text-xl font-semibold mb-4'><span className='text-pink-500 font-semibold '>Dribble</span>, Graphyc designer</h3>

                    <p className='text-sm'>I started my design career with Dribbble. I was incharge of creating illustrations for the platform.</p>

                </article>

            </section>
           
            

        </section>
    )
}

export default Work
