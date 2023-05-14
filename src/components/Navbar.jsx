import React, { useState } from 'react'

const Navbar = () => {

    const [isShowNav, setIsShowNav] = useState(false)

    const handleShowNav = () => {
        setIsShowNav(!isShowNav)
    }

    return (
        
            <header className='flex  justify-between py-4 px-2 text-2xl text-white relative items-center  md:px-4 md:py-0  bg-black z-30'>

                <i onClick={handleShowNav} className='bx bx-menu-alt-left text-gray-300 text-3xl cursor-pointer md:hidden'></i>

                <h1 className='font-bold text-green-d'>Gersant</h1>



                <nav className={`text-white absolute top-full bg-black ${isShowNav ? "left-0 bg-black opacity-70" : "-left-full"} w-full grid text-lg  gap-2 duration-200 md:static md:flex md:w-auto`}>
                    <a className='hover:bg-violet-700 duration-200 pl-2' href="#">Experience</a>
                    <a className='hover:bg-violet-700 duration-200 pl-2' href="#">Work</a>
                    <a className='hover:bg-violet-700 duration-200 pl-2' href="#">Phtography</a>
                    <a className='hover:bg-violet-700 duration-200 pl-2' href="#">Contact</a>
                </nav>

            </header>
        


    )
}

export default Navbar
