import React from 'react'
import emailjs from '@emailjs/browser';

const Contac = () => {
 const handleSubmit = (e)=>{
e.preventDefault();

emailjs
.sendForm(
    import.meta.env.VITE_APP_SERVICE_ID,
    import.meta.env.VITE_APP_TEMPLATE_ID,
    e.target,
    import.meta.env.VITE_APP_PUBLIC_KEY
     )
.then((res)=>console.log(res.text))
.catch((err)=>console.log(err))
 };

 console.log(import.meta.env.VITE_APP_SERVICE_ID)


    return (
        <section className='text-white px-6 py-10 grid gap-15 max-w-[500px] mx-auto bg-gray-900 rounded-lg'>

            

            <form onSubmit={handleSubmit} className='grid gap-6 mx-1/2 w-full'>
                <div className='grid gap-1'>
                    <label className='text-sm' htmlFor="name'">Name</label>
                    <input name='from_name' className='bg-[#494993] p-2 outline-none' id='name' type="text" />
                </div>
                <div className='grid gap-1'>
                    <label className='text-sm' htmlFor="email">Email</label>
                    <input name='email' className='bg-[#494993] p-2 outline-none' id='email' type="text" />
                </div>
                <div className='grid gap-1'>
                    <label className='text-sm' htmlFor="message">Message</label>
                    <textarea name='message' className='bg-[#494993] p-2 outline-none' id="message" rows="10"></textarea>
                </div>
                <button className='bg-[#494993] rounded-lg py-4 font-bold hover:bg-indigo-600 transition-colors'>Send</button>
            </form>

        </section>
    )
}

export default Contac
