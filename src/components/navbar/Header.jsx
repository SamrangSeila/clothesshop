import { Dropdown,Avatar, Button, Navbar } from 'flowbite-react'
import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Header.css'
import Header1 from './Header1'
const Header = () => {
    return (
        <>
            <Header1 />
            <Navbar
                fluid={true}
                rounded={true}
                style={{ backgroundColor: '#0099ff' }}
                className='
                bg-sky-600
                text-white
                w-full
                py-3
                img-navbar
                '
            >

                <svg className='wave-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,96L120,101.3C240,107,480,117,720,112C960,107,1200,85,1320,74.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>

                <Navbar.Brand href="#">
                    <img
                        src={Logo}
                        className="mr-3 h-6 sm:h-9 rounded-[100%]"
                        alt="Bank"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Bank
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 text-white">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item

                        >
                            <span>Dashboard</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                        className='
                        text-white
                        font-bold
                        text-lg
                        '

                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars"
                        className='
                    text-white
                    font-bold
                    text-lg
                    '
                    >
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars"
                        className='
                    text-white
                    font-bold
                    text-lg
                    '>
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars"
                        className='
                    text-white
                    font-bold
                    text-lg
                    '
                    >
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars"
                        className='
                    text-white
                    font-bold
                    text-lg
                    '
                    >
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>


            <div className="img md:h-[90vh] h-[40vh] ">

            </div>
        </>
    )
}

export default Header
