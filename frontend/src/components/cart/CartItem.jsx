import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/1664/1664/shoe/m/z/u/camel-g-4092y14-woodland-40-original-imadwjtqnv3pxhd9.jpeg?q=90" alt="" />
                </div>
                <div className='ml-5 space-y-1 '>
                    <p className='font-semibold'> Mens shoes</p>
                    <p className='opacity-70'>Size: 8 , white</p>
                    <p className='opacity-70'>Seller: Nike</p>
                    <div className='flex space-x-5 items-center pt-6 text-gray-900'>
                        <p className='font-semibold'>₹199 </p>
                        <p className='opacity-50 line-through'>₹211</p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>
                </div>
               
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton >
                        <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span> 
                        <IconButton sx={{color:'black'}} >
                        <AddCircleOutlineIcon/>
                        </IconButton>
                        </div>
                    <div>
                        <Button sx={{color:'black'}}>Remove</Button>
                    </div>
                </div>
        </div>
    )
}

export default CartItem