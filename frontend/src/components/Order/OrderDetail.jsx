import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';


const OrderDetail = () => {
  return (
    <div className='px:5 lg:px:20 ml-9'>
      <div>
        <h1 className='font-bold text-lg py-10'>Delivery Address</h1>
        <AddressCard />
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className='space-y-5'>
        {[1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Grid item xs={6}>
            <div>
              <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-04-2021_LL_CT8527-400_1_1.jpg" alt="" />
              <div className='space-y-2 ml-5'>
                <p>Air Jordan 4 Retro SE</p>
                <p className='space-x-5'><span>Color:blue</span><span>Size:12</span></p>
                <p>Seller: Nike</p>
                <p>Price: Rs.12345</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color:'black'}}>
              <StarBorderIcon sx={{fontSize:"3rem"}} className='px-2 text-2xl'/>
              <span>Rate and Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  )
}

export default OrderDetail