import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_640.png" alt="" />
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
                   {true && <div>
                    <p> 
                        <AdjustIcon sx={{width:'15px',height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>Delivered on November 28</span>
                       
                        </p>
                        <p>Your Item has been delivered</p>
                        </div>}
                   {false && <p>
                        <span>Expected Delivery on November 28</span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard