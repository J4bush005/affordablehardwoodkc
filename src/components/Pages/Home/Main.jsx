import React from 'react'
import Products from './Products'
import Testamonials from './Testamonials'
import Story from './Story'

function Main() {
  return (
    <div>
    <h1 className="text-center text-white display-5" id="banner">The #1 Flooring Company in Missouri</h1>
    <Products/>
    <Testamonials/>
    <Story/>
    </div>
  )
}

export default Main