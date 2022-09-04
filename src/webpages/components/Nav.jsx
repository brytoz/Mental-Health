import { Fragment } from 'react'
import Logos from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = (e) => {
    e.preventDefault()
    setDropdown(!dropdown)
  }



  return (
    <Fragment>
      <nav
        class=" bg-gray-600/[.06]nav flex items-center justify-between flex-wrap  md:px-24 z-50"
        style={{ position: 'sticky', top: 0, left: 0 }}
      >
        <div class="flex items-center flex-shrink-0 text-white md:mr-24">
          <Link to="/">
            <span class="font-semibold text-xl tracking-tight">
              <img
                src={Logos}
                className="w-28 md:w-32"
                alt="MoodConnect App"
                title="MoodConnect App"
              />
            </span>
          </Link>
        </div>
        <div class="block lg:hidden">
          <button
            onClick={handleDropdown}
            class="flex items-center px-3 py-2 border rounded text-cyan-500 mr-3 border-cyan-500 hover:text-cyan-500 hover:bg-tranparent hover:border-text-cyan-500"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:inline-block flex-grow"></div>

        <div
          id="reduce"
          class="text-xl md:text-normal w-full block flex lg:flex-grow  lg:items-center  justify-evenly lg:w-auto "
        >
          <div class=" md:flex-grow justify-evenly md:space-x-20 md:mr-12">
            <Link to="/">
              <div
                href="#responsive-header"
                class="responsive-header block cursor-pointer  border-b-4 mt-4 lg:inline-block lg:mt-0 text-cyan-500 hover:text-cyan-500 "
              >
                Home
              </div>
            </Link>
             <Link to="/about">
              <span
                href="#responsive-header"
                class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-cyan-500 hover:text-cyan-500 "
              >
                About Us
              </span>
            </Link>
          
            <span
              href="#responsive-header"
              class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-cyan-500"
            >
  
                Slack
            </span>
 
          </div>
          <Link to="/account">
            <div className="cursor-pointer ">
              <span class="responsive-header inline-block  px-4 py-2 leading-none  font-extrabold hover:bg-gradient-to-r  text-white  bg-gradient-to-r from-cyan-500 to-cyan-400  hover:text-cyan-500 rounded hover:from-white hover:to-white  mt-4 lg:mt-0">
                LOGIN
              </span>
            </div>
          </Link>
        </div>
        {dropdown && (
          <div class="lg:hidden text-xl w-full block flex lg:flex-grow  bg-cyan-500 lg:bg-gray-600/[.06] lg:items-center  justify-evenly lg:w-auto ">
            <div class="w-full text-center  md:flex-grow justify-evenly md:space-x-20 md:mr-12">
              <Link to="/">
                <div
                  class="w-full  block cursor-pointer    my-3 lg:inline-block lg:mt-0 text-white hover:text-white "
                >
                  Home
                </div>
              </Link><hr />

              <Link to="/about us">
                <span
                  class="  block cursor-pointer my-3 lg:inline-block lg:mt-0 text-white hover:text-white "
                >
                  About Us
                </span>
              </Link>
              <hr />

              
              <span
                href="#responsive-header"
                class="responsive-header block cursor-pointer my-3 lg:inline-block lg:mt-0 text-white hover:text-white"
              >
               
                  Slack
              </span>
            </div>
          </div>
        )}
      </nav>
    </Fragment>
  )
}
