import React from 'react'
import img1 from '../../assets/wellness.png'
import img2 from '../../assets/wellness2.png'
import img3 from '../../assets/wellness3.png'
import img4 from '../../assets/wellness4.png'
import img5 from '../../assets/wellness5.png'

function Partners() {
  return (
    <div class="w-full py-16 h-auto bg-white opacity-25 ">
        <div class="text-center text-4xl font-bold pt-8">Partners</div>
      <div class="flex-wrap space-y-8 justify-around">
        <div class="flex justify-around space-between">
          <div>
            <img
              src={img1}
              alt="calmerry"
              className="w-32 h-24 md:w-42 md:h-26"
            />
          </div>

          <div>
            <img
              src={img3}
              alt="betterhelp"
              className="w-32 h-24 md:w-42 md:h-26"
            />
          </div>
        </div>

        <div class="flex justify-around">
          <div>
            <img src={img2} alt="rise" className="w-32 h-24 md:w-42 md:h-26" />
          </div>

          <div>
            <img
              src={img4}
              alt="your super mom"
              className="w-32 h-24 md:w-42 md:h-26"
            />
          </div>

          <div>
            <img
              src={img5}
              alt="headspace"
              className="w-32 h-24 md:w-42 md:h-26"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
