import React from 'react'

const Work = () => {
    return (
        <section className='text-white py-12 px-2 max-w-[1000px] mx-auto'>

            <h3 className='uppercase text-xl font-semibold text-gray-400'>My projects</h3>

            <h2 className='text-3xl font-bold mt-2'>These are some of the project with I acquired my skills as a <span className='text-purple-700'>Front-end</span> Front-end and they are constatly improving</h2>

            <section className='grid gap-12 mt-12 sm:grid-cols-3 items-center border-[1px] border-green-d rounded-md p-1 border-dotted'>

                <article>

                    <div>
                        <img src="/images/Group.png" alt="" />
                    </div>

                </article>

                <article>

                    <span className='text-8xl text-gray-400 '>Blog</span>

                    <img className='w-[120px] mx-auto pt-3' src="/images/block.png" alt="" />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui debitis <a  className='text-xl hover:text-purple-700' target='_blank' href="https://blog-gerlysantiago.netlify.app" >Click here</a> </p>

                </article>

                <article>

                    <span className='text-6xl text-gray-400'>Shopping cart</span>

                    <img className='w-[100px] mx-auto pt-3' src="/images/cart.png" alt="" />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui debitis <a  className='text-xl hover:text-purple-700' target='_blank' href="https://carritocomprasdegersant.netlify.app" >Click here</a> </p>

                </article>

                <article>

                    <span className='text-6xl text-gray-400'>GALAX</span>

                    <img className='w-[120px] mx-auto pt-3' src="/images/galax.png" alt="" />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui debitis ipsum dolor sit amet consectetur, ipsum dolor sit ame  <a  className='text-xl hover:text-purple-700' target='_blank' href="https://primergersatreact.netlify.app" >Click here</a></p>

                </article>

                <article>

                    <span className='text-7xl text-gray-400'>Weather</span>

                    <img className='w-[150px] mx-auto pt-3' src="/images/wheater.png" alt="" />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui debitis ipsum dolor sit amet consectetur, ipsum dolor sit ame. <a  className='text-xl hover:text-purple-700' target='_blank' href="https://weather-gersant.netlify.app" >Click here</a></p>

                </article>

                <article>

                    <span className='text-8xl text-gray-400'>CRUD</span>

                    <img className='w-[120px] mx-auto pt-3' src="/images/crud.png" alt="" />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui debitis ipsum dolor sit amet consectetur <a  className='text-xl hover:text-purple-700' target='_blank' href="https://dynamic-gersant-crud.netlify.app" >Click here</a></p>

                </article>

                <article>

                    <span className='text-5xl text-gray-400'>Ricky and Morty</span>

                    <img className='w-[150px] mx-auto pt-3' src="/images/rm.png" alt="" />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui debitis ipsum dolor sit amet <a  className='text-xl hover:text-purple-700' target='_blank' href="https://gersantrickymorty.netlify.app" >Click here</a></p>

                </article>

                <article>

                    <span className='text-7xl text-gray-400'>Pokedex</span>

                    <img className='w-[150px] mx-auto pt-3' src="/images/pokedex.png" alt="" />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui debitis ipsum m ipsum dolor sit amet consectetur m ipsum dolor sit amet consectetur <a  className='text-xl hover:text-purple-700' target='_blank' href="https://gersant-pokedex-api.netlify.app" >Click here</a></p>

                </article>

                <article>

                    <span className='text-5xl text-gray-400'>E-commerce</span>

                    <img className='w-[150px] mx-auto pt-3' src="/images/ecomerce.png" alt="" />

                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui debitis ipsum dolor sit amet. or sit amet consectetur <a  className='text-xl hover:text-purple-700' target='_blank' href="https://gersant-ecomerce-e6.netlify.app" >Click here</a></p>

                </article>

            </section>
           
            

        </section>
    )
}

export default Work
