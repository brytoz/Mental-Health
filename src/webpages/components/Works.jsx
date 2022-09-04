import * as React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
import HowWeWork from './HowWeWork'
import HowWeWorks from './HowWeWorks'
import phone from '../../assets/phone.png'
import teamwork from '../../assets/teamwork.png'
import anony from '../../assets/anony.png'
import stats from '../../assets/stats.png'

const Works = () => {
  return (
    <>
      <div class="py-16 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="svg-pattern-squares-1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#svg-pattern-squares-1)"
            ></rect>
          </svg>

          <div class="relative">
            <h3 class="text-center tracking-tight md:text-5xl leading-8 font-extrabold  text-gray-900 text-4xl wow fadeIn">
              How Does MoodConnect Work? 
            </h3>
          </div>

          <div class="relative mt-12 lg:mt-20 lg:gap-8 lg:items-center">
            <div class="relative">
              <HowWeWork
          a      img={phone}
                topic=" Mood Analyzer"
                text="Stop wasting time with check-ins & Learn about how your employees are
          feeling through our mood analyzer."
              />

              <HowWeWorks
                img={stats}
                topic="Anonymous"
                text="Send our anonymous surveys to your employees that address the issues your business cares about."
              />
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0">
              <svg
                class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="svg-pattern-squares-2"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#svg-pattern-squares-2)"
                ></rect>
              </svg>
              <img
                class="relative mx-auto"
                width="490"
                src="/img/features/feature-example-1.png"
                alt=""
              />
            </div>
          </div>

          <svg
            class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="svg-pattern-squares-3"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#svg-pattern-squares-3)"
            ></rect>
          </svg>

          <div class="relative">
            <HowWeWork
              img={anony}
              topic="Positive Wellness"
              text="Get access to reputable wellness services that address mental, physical, and financial wellness through our partners and wellness practitioners."
            />

            <HowWeWorks
              img={teamwork}
              topic="Team's Productivity"
              text="See an increase in your team's productivity and overall company morale."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Works;
