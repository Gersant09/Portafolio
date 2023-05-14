import React from 'react'

const Footer = () => {
  return (
    <section className='bg-gray-d py-6 text-white px-3'>

      <article className='grid gap-20 max-w-[1000px] mx-auto sm:grid-cols-2'>

        <section>
          <div>
            <img src="" alt="" />
          </div>

          <div className='flex gap-2 py-6'>
            <img src="/images/js.png" alt="" />
            <img src="/images/css.png" alt="" />
            <img src="/images/react.png" alt="" />
            <img src="/images/next.png" alt="" />
          </div>
        </section>

        <section className='grid grid-cols-2'>

          <article className='grid gap-6'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Process</a>
          </article>

          <article className='grid gap-6'>
            <a href="#">Store</a>
            <a href="#">Blog</a>
            <a href="#">Reading list</a>
          </article>

        </section>

      </article>

    </section>
  )
}

export default Footer
