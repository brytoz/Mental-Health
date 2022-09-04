import React from 'react'
import img1 from '../../assets/customer1.png'
import img2 from '../../assets/customer2.png'
import img3 from '../../assets/customer3.png'
import img4 from '../../assets/customer4.png'
import img5 from '../../assets/customer5.png'

function Customers() {
  return (
    <div class="w-full h-auto bg-gray-200 opacity-25 ">
      <div class="flex-wrap space-y-8 justify-around">
        <div class="flex justify-around space-between">
          <div>
            <img
              src={img1}
              alt="Prepare4rc"
              className="w-32 h-24 md:w-48 md:h-32"
            />
          </div>

          <div>
            <img
              src={img3}
              alt="analog"
              className="w-32 h-24 md:w-48 md:h-32"
            />
          </div>
        </div>

        <div class="flex justify-around">
          <div>
            <img
              src={img2}
              alt="testedweb"
              className="w-32 h-24 md:w-48 md:h-32"
            />
          </div>

          <div>
            <img src={img4} alt="skibi" className="w-32 h-24 md:w-48 md:h-32" />
          </div>

          <div>
            <img
              src={img5}
              alt="vibe libing"
              className="w-32 h-24 md:w-48 md:h-32"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers
