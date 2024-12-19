import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


const steps = ["Placed", "Order Confirmed", "Shipped ", "Out for Delivery", "Delivered"]
// OrderTracker component to display the stepper for order progress
const OrderTracker = ({ activeStep }) => {
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {/* Mapping through the steps array to render each step */}
        {steps.map((label) => <Step>
          <StepLabel sx={{ color: 'black', fontSize: "44px" }}>{label}</StepLabel>
        </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker