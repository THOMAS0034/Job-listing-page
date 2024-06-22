import React from 'react'
import Hero from '../components/hero'
import HomeCards from '../components/Homecards'
import Joblisting from '../components/Joblisting'
import Viewalljobs from '../components/Viewalljobs'

const Home = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <Joblisting isHome={true}/>
    <Viewalljobs/>
  </>
  )
}

export default Home