import { Avatar, Box, Grid2, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        
        <Grid2 container spacing={2} gap={3}>
<Grid2 item xs={1}>
    <Box>
        <Avatar className="text-white" sx={{width:56, height:56, bgcolor:"#9155fd"}}></Avatar>
    </Box>
</Grid2>
<Grid2 item xs={9}>
    <div className='space-y-2'>
    <div>
        <p className='font-semibold text-lg'>Sarath</p>
        <p className='opacity-70'>November 28,2024</p>
    </div>
    </div>
    <Rating value={4.5} name="half-rating" readOnly precision={0.5}></Rating>
    <p>blah blah- type review </p>
</Grid2>
        </Grid2>
    </div>
  )
}

export default ProductReviewCard