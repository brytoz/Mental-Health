import landing from '../../assets/landing.png'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <>
      <div className=" img1 w-full flex md:px-12  ">
        <div class="w-full  justify-center items-center content-center flex  lg:pl-8 md:w-1/2">
        <div class="relative box " style={{ zIndex: 1, opacity: 1 }}></div>
          <div class="w-full lg:w-2/3  flex-wrap justify-center  items-center content-center space-y-12 px-4 text-center md:text-left ">
          <div class="relative boxes " style={{ zIndex: 1, opacity: 1 }}></div>
          <motion.div animate={{y:1}} transition={{ delay:0.5}} initial={{y:150}}  class="w-full flex justify-center items-center text-4xl md:text-5xl  lg:text-6xl font-bold  goUp ">
              Creating Healthier Workspaces.
            </motion.div>
            <motion.div animate={{y:1}} transition={{ delay:0.9}} initial={{y:100}} class="text-2xl">
              Prevent Employee Burnout & Improve Your Company's Financial,
              Mental & Physical Health.
            </motion.div>
            <div class="flex-row space-x-4">
              <motion.div animate={{y:1}} transition={{ delay:1.3}} initial={{y:100}} class="inline-flex rounded-md shadow">
                <a
                  href="#"
                  style={{ backgroundColor: '#0ba7bc' }}
                  class="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
                >
                  Get started
                </a>
              </motion.div>

              <motion.div animate={{y:1}} transition={{ delay:1.5}} initial={{y:100}}  class="  inline-flex">
                <a
                  href="#"
                  style={{ color: '#0ba7bc' }}
                  class="hidden lg:inline-block inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-teal-100/50 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300  transition duration-500 ease-in-out shadow-md shadow-teal-900/50 transform hover:-translate-z-1 hover:scale-110 "
                >
                  Learn more
                </a>
              </motion.div>
            </div>
          </div>
          <div class="hidden md:block lg:w-1/3">
          <div class="relative boxeses " style={{ zIndex: 1, opacity: 1 }}></div>
          </div>
        </div>

        <div class=" w-full mt-12 md:w-1/2 flex   hidden md:inline-block lg:mr-6 ">
          <div class="flex h-screen justify-center items-center ">
            
            <motion.img
              src={landing}
              initial={{scale:0}}
              animate={{scale:1}}
              alt="moodconnectApp"
              className="w-full height transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110   "
              id="heights"
            />
          </div>
        </div>
      </div>
    </>
  )
}
