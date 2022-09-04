import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Landing from './components/Landing'
import Works from './components/Works'
import Testimony from './components/Testimony'
import Trusted from './components/Trusted'
import SectionFour from './components/SectionFour'
import Footer from './components/Footer'
import Customers from './components/Customers'
import Partners from './components/Partners'
import Nav from './components/Nav'
import Loader from './components/Loader'

export default function Home() {
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setAnimation(true)
    }, 1000)
  }, [])

  return (
    <>
      {animation ? (
        <div className="relative">
          <div className="w-full absolute">
            <Nav />
          </div>
          <Landing />
          <Customers />
          <Works />
          <Testimony />
          <Partners />
          <Trusted />
          <SectionFour />
          <Footer />
        </div>
      ) : (
        <Loader initial={1} animate={0} />
      )}
    </>
  )
}
