import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './components/Loader'

const Error = () => {


const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true)
    }, 1000)
  }, [])

  return (
    <>
      {animation ? ( 
      <div className="img1 flex justify-center items-center ">
        <div className="flex-wrap justify-center text-center text-4xl md:text-5xl">
          <div>This page does not exist yet.</div>
          <div class="pt-12">
            Your <span class="text-cyan-500 font-bold"> Mood</span> should not be changed either
          </div>
          <div class="pt-12 cursor-pointer">
            <Link to="/">
              <span class="text-3xl text-cyan-500 font-bold">
                Just Go back
                </span>
            </Link>
          </div>
        </div>
      </div> 
      ) : (
          <Loader  initial={0} animate={1} />
      ) }
    </>
  )
}

export default Error
