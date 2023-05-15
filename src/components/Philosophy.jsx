import React from 'react'

const Philosophy = () => {
    return (

        <section className='max-w-[1000px] mx-auto text-white sm:grid sm:grid-cols-2 md:relative '>



            <article className='sm:grid sm:content-between border-[3px] border-purple-700 bg-gray-950 py-10 px-2 grid gap-12 max-w-max rounded-lg border-dashed'>
                <div>
                    <h3 className='text-2xl font-bold mb-4'>About and my Skills</h3>
                    <p className='text-gray-400'>I study a sofware developer technician and a bootcamp as a full stack developer, acquiring knowledge in various technologies such as <span className='text-xl text-purple-700'>Java</span> , <span className='text-xl text-pink-600'>HTML</span> , <span className='text-xl text-yellow-600'>CSS</span>,
                        <span className='text-xl text-green-d'> JavaScript</span> , <span className='text-xl text-green-500'>React</span> , <span className='text-xl text-cyan-500'>Tailwind</span> and <span className='text-xl text-blue-500'>NextJs</span> . Driven librarian skilled at providing excellent public service to students and staff,managing the library's publication collection, and providing research assistance.

                    </p>
                </div>
                <section className='flex justify-center'>         
          <div className='flex gap-2 py-6'>
            <img src="/images/js.png" alt="" />
            <img src="/images/css.png" alt="" />
            <img src="/images/react.png" alt="" />
            <img src="/images/next.png" alt="" />
          </div>
        </section>

                <p>Check my
                    <a className='border-b-2 border-gray-700 max-w-max mb-1 hover:text-xl hover:text-green-d' href="#"> Github </a> and 
                    <a className='border-b-2 border-gray-700 max-w-max mb-1 hover:text-xl hover:text-purple-700' href=""> Netlify</a>
                </p>


            </article>

            <article>
                <img className='md:hidden' src="/images/image1.png" alt="" />
                <img className='hidden md:grid md:max-w-[500px] md:justify-center md:mx-auto md:w-full md:h-[500px] md:object-cover' src="/images/Group82.png" alt="" />

            </article>

        </section>
    )
}

export default Philosophy
