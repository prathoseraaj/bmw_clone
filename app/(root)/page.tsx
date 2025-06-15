import React from 'react'
import Home from '../home/page'
import Models from '../models/page'
import Offer from '../offer/page'

const page = () => {
  return (
    <div className='mb-50'>
        <Home/>
        <Models/>
        <Offer/>
    </div>
  )
}

export default page