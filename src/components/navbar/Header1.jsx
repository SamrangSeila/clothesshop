import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import './Header.css'
import { FaLocationArrow } from "react-icons/fa";

const Header1 = () => {
    return (
        <div>
            <div className="grid grid-rows-1      header1-bg border-b-4 h-10 mb-2">
                <div className="grid md:grid-cols-1 grid-cols-1">
                    <div className='grid md:grid-cols-4 grid-cols-4'>
                        <div className="logo-gmail flex justify-center items-center">
                            <span className='pr-2 md:text-xl  text-2xl font-bold text-black'><AiOutlineMail /></span>
                            <span className='font-semibold xl:text-sm lg:text-sm md:text-xs md:block hidden text-white '  >Email: somrangsela@gmail.com</span>
                        </div>
                        <div className="logo-gmail flex justify-start items-center">
                            <span className='pr-2 md:text-xl text-2xl font-bold text-black'><MdCall /></span>
                            <span className='font-semibold xl:text-sm lg:text-sm md:text-xs md:block hidden text-white '  >Phone : +855 86-726-267</span>
                        </div>
                       
                        <div>
                           {/*free space*/}
                        </div>
                        <div className='flex justify-end items-center md:mr-8'>
                            <span className='pr-3 md:text-sm text-xl'><FaLocationArrow /></span>
                            <span className='font-semibold xl:text-sm lg:text-sm md:text-xs md:block hidden text-white '>Location : Phnom Penh</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header1

