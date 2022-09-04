import React from 'react'
import Logos from '../../assets/logo.png'
import { motion } from 'framer-motion'

function Loader({initial, animate}) {
  return (
    <div className=" img1 w-full h-screen flex   ">
      <div class="w-full  justify-center items-center content-center flex  ">
        <motion.img
          src={Logos}
          initial={{ scale: initial }}
          animate={{ scale: animate,  }}
          transition={{  duration: 1}}
          className="w-48"
          alt="MoodConnect App"
          title="MoodConnect App"
        />
        
      </div>
    </div>
  )
}

export default Loader
