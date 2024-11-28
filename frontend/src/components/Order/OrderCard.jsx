import { Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className='mb-2'>Nike shoes</p>
                            <p className='opacity-50 text-xs font-semibold'>Size:8</p>
                            <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>Rs 678</p>
                </Grid>
                <Grid item xs={4}>
                    <p> 
                        <span>Delivered on November 28</span>
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard