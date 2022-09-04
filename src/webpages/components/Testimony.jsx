import * as React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
import img from '../../assets/yagub.png'

const Testimony = () => {
  return (
    <>
      <div class="bg-cyan-500" style={{ backgroundColor: '#0ba7bc' }}>
      <div class="w-1/2 text-center md:text-left md:pl-48 pt-12 text-4xl font-bold text-gray-300 opacity-75 md:flex-shrink-0">
              Testimonies
            </div>
        <div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
            
          <div class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-gray-200 lg:pr-16">
            
            <blockquote class="mt-8 md:flex-grow md:flex md:flex-col">
              <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
                <p class="relative">
                  We recently found out that our team in Eastern Europe was
                  showing signs of stress
                </p>
              </div>
              <footer class="mt-8">
                <div class="flex">
                  <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      src={img}
                      alt="moodconnectApp"
                      className="h-12 w-12 rounded-full  "
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-base font-medium text-white italic">
                      Yagub Rahimov
                    </div>
                    <div class="text-base font-medium text-indigo-200">
                      MoodConnect customer
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div class="py-12 px-4 border-t-2 border-gray-200 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
             
            <blockquote class="mt-8 md:flex-grow md:flex md:flex-col">
              <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-cyan-700"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
                <p class="relative">
                  We recently found out that our team in Eastern Europe was
                  showing signs of stress
                </p>
              </div>
              <footer class="mt-8">
                <div class="flex">
                  <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      src={img}
                      alt="moodconnectApp"
                      className="h-12 w-12 rounded-full  "
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-base font-medium text-white italic">
                      Yagub Rahimov
                    </div>
                    <div class="text-base font-medium text-indigo-200">
                      MoodConnect customer
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimony
