import React from 'react'
import MainCarousel from './MainCarousel'
import HomeSectionCarousel from './HomeSectionCarousel'
import { mens_kurta } from '../data/menKurta'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        
        {/* <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'> */}
            {/* <HomeSectionCarousel data={mens_kurta} sectionName={"Men's footwear"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's footwear"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"New Arrivals"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Formal Collection"}/> */}
           <div className="bg-gray-200 p-4 text-center">
  <ul className="flex space-x-4 justify-center text-xl">
    <li className="border-r-2 pr-4">Free standard delivery</li>
    <li className="border-r-2 px-4">Free returns</li>
    <li className="px-4">Fast Delivery</li>
  </ul>
</div>



            <div className="flex flex-wrap w-full h-auto items-center justify-around bg-gray-100">
  {/* First Image */}
  <img
    src="https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/original/clarks-cms_images/1707809341Web_Banner_Size_Web_Banner_705x397_Clarks_Feb_24_Banners_120224.webp"
    alt="First"
    className="w-[45%] h-[30%] object-contain m-2"
  />

  {/* Second Image */}
  <img
    src="https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/original/clarks-cms_images/1707809251Web_Banner_Size_Web_Banner_705x397_Clarks_Feb_24_Banners_120224.webp"
    alt="Second"
    className="w-[45%] h-[30%] object-contain m-2"
  />
</div>



<div className="flex flex-wrap w-full h-auto items-center justify-around bg-gray-100">
  {/* First Image */}
  <img
    src="https://images-static.nykaa.com/uploads/7c58a9c3-806d-45b2-843e-297aef00b932.jpg?tr=w-900,cm-pad_resize"
    alt="First"
    className="w-[45%] h-[30%] object-contain m-2"
  />

  {/* Second Image */}
  <img
    src="https://images-static.nykaa.com/uploads/c66d38dd-445d-4cbb-ae95-513fe53e636a.jpg?tr=w-900,cm-pad_resize"
    alt="Second"
    className="w-[45%] h-[30%] object-contain m-2"
  />
  {/* <img
    src="https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/original/clarks-cms_images/1707809267Web_Banner_Size_Web_Banner_705x397_Clarks_Feb_24_Banners_120224_-04.webp"
    alt="First"
    className="w-[45%] h-[30%] object-contain m-2"
  /> */}
</div>




        {/* </div> */}
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage