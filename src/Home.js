import React from 'react'
import Herosection from './Components/Herosection'
import Service from './Components/Service'
import Cta from './Components/CallToAction'

const Home = () => {
  return (
    <>
      <Herosection title="Best Offer"/>
      <Service/>
      <Cta/>
    </>
  )
}

export default Home