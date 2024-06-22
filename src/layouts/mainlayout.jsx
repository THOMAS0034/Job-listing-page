import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Homecards from '../components/Homecards'
import Joblisting from '../components/Joblisting'
import Viewalljobs from '../components/Viewalljobs'

const mainlayout = () => {
  return(<>
  <Navbar/>
  <Outlet/>
  </>
  )
}

export default mainlayout