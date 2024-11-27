import React from 'react'
import MainCarousel from './MainCarousel'
import HomeSectionCarousel from './HomeSectionCarousel'
import { mens_kurta } from '../data/menKurta'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's footwear"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's footwear"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"New Arrivals"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Formal Collection"}/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage