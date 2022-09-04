import React from 'react'

function HowWeWork({ img, topic, text }) {
  return (
    <div class="sm:flex-wrap md:flex-wrap w-full mb-16 md:space-x-12 ">
      <div className="w-full md:flex">
        <div class="w-full md:w-1/2 flex justify-center items-center align-center  ">
          <div class="flex-wrap text-center md:text-left">
            <h4 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              {topic}
            </h4>
            <p class="mt-3 text-lg text-gray-500">{text}</p>
          </div>
        </div>
        <div class="w-full  md:w-1/2 flex justify-center items-center">
          <img
            src={img}
            alt="moodconnectApp"
            className="w-48 md:w-72 mt-6 md:mt-0 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
