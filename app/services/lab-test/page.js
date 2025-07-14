import React from 'react'
import HeroSection from './HeroSection'
import Journey from './Journey'
import Reviews from './Reviews'
import Experts from './Experts'
import CTA from './CTA'
import FAQ from './FAQ'


const page = () => {
  return (
    <div>
      <HeroSection/>
      <Reviews/>
   
 <Journey/>
 <Experts/>
<CTA/>
<FAQ/>
    </div>
  )
}

export default page
