import React from 'react'
import { NavLink } from 'react-router-dom'

const Herosection = (props) => {
  return (
    <div className="px-6 py-12 md:px-12 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">{props.title}<br /><span >for your business</span></h1>
            <NavLink className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" to="/product" role="button"><button>Shop Now</button></NavLink>
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/horizontal/048.jpg"
              className="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection