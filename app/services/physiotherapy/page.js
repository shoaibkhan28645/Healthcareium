import React from 'react'
import HeroSection from './HeroSection'
import Reviews from './Review'
import PhysiotherapyCategories from './PhysiotherapyCaregories'
import FAQ from './FAQ'
import Commitment from './Commitment'
const page = () => {
  return (
    <div>
      <HeroSection/>
      <Reviews/>
      <PhysiotherapyCategories/>
      <Commitment/>
      <FAQ/>
    </div>
  )
}

export default page
