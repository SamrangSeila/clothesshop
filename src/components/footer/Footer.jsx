import { Footer } from 'flowbite-react';
import React from 'react'
import './/Footer.css'
import Logo from '../../assets/img/logo.png'
import { BsFacebook, BsInstagram, BsTwitter, BsDribbble, BsGithub } from "react-icons/bs";
const Footers = () => {
  return (
    <div  style={{backgroundColor:'#0099ff'}}>
      <Footer container={true}
        style={{ backgroundColor: '#0099ff' }}
        className='footer-bg mt-28'
      >
        <svg className='wave-footer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,96L120,90.7C240,85,480,75,720,80C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand

                href="https://flowbite.com"
                className='rounded-[100%]'
                src={Logo}
                alt="Flowbite Logo"
                name="Bank"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title className='text-white' title="about" />
                <Footer.LinkGroup col={true} className='text-white'>
                  <Footer.Link href="#">
                    Flowbite
                  </Footer.Link>
                  <Footer.Link href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='text-white' title="Follow us" />
                <Footer.LinkGroup col={true}
                  className='text-white'
                >
                  <Footer.Link href="#"
                    className='text-white'
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link href="#">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='text-white' title="Legal" />
                <Footer.LinkGroup col={true} className='text-white'>
                  <Footer.Link href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#">
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Flowbite™"
              year={2022}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                className='text-white'
                href="#"
                icon={BsFacebook}
              />
              <Footer.Icon
                className='text-white'
                href="#"
                icon={BsInstagram}
              />
              <Footer.Icon
                className='text-white'
                href="#"
                icon={BsTwitter}
              />
              <Footer.Icon
                className='text-white'
                href="#"
                icon={BsGithub}
              />
              <Footer.Icon
                className='text-white'
                href="#"
                icon={BsDribbble}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default Footers
