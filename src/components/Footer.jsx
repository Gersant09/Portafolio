import React from 'react'

const Footer = () => {
  return (
    <section className='bg-gray-d py-6 text-white px-3'>

      <article className='flex gap-20 max-w-[1000px] mx-auto justify-center'>



        <section className='flex'>

          <article className='flex gap-6'>
            <a className='hover:text-xl hover:bg-purple-700 ' href="/">Home</a>
            <a className='hover:text-xl hover:bg-purple-700 ' href="#">My Projects</a>
            <a className='hover:text-xl hover:bg-purple-700 ' href="#">About and my Skills</a>
            <a className='hover:text-xl hover:bg-purple-700 ' href="#">Contac</a>
          </article>

        </section>

      </article>

    </section>
  )
}

export default Footer
