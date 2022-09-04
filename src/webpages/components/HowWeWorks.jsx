import React from 'react'
import {motion} from 'framer-motion'

function HowWeWorks({ img, topic, text }) {
  return (
    <motion.div animate={{y:1}} transition={{ delay:0.5}} initial={{y:-50}}  class="flex w-full space-x-12 mb-16">
      <div className="w-full md:flex md:space-x-12">
        <div class="hidden md:block w-full md:w-1/2 flex justify-center items-center">
          <img
            src={img}
            alt="moodconnectApp"
            className="w-48 md:w-72  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110   "
          />
        </div>

        <div class="w-full  md:w-1/2 flex justify-center items-center align-center ">
          <div class="flex-wrap text-center md:text-left">
            <h4 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              {topic}
            </h4>
            <p class="mt-3 text-lg text-gray-500">{text}</p>
          </div>
        </div>

        <div class="md:hidden w-full md:w-1/2 flex justify-center items-center">
          <img
            src={img}
            alt="moodconnectApp"
            className="w-48 md:w-72  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110   "
          />
        </div>
      </div>
    </motion.div>
  )
}

export default HowWeWorks
