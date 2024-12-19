import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
import { useState } from 'react';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  // State variables for managing active step and skipped steps
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const location = useLocation();
  const navigate = useNavigate();

  // Get the current step from the query parameter
  const querySearch = new URLSearchParams(location.search);
  let step = parseInt(querySearch.get('step'), 10);


  step = isNaN(step) ? 0 : step; // Default to step 0 if query parameter is missing or invalid
  // Function to move to the next step
  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }
// Function to go back to the previous step
  const handleBack = () => {
    navigate(`/checkout?step=${step - 1}`)
  }
   // Function to reset the checkout process
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className='px-10 lg:px-20'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label}{...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (// Check if all steps are completed
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button

                onClick={handleReset}
              >
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={step == 1}// Disable back button on the first step
                onClick={handleBack}// Navigate back to the previous step
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>
            <div className='my-5'>
              {step == 1 ? <DeliveryAddressForm handleNext={handleNext} /> : <OrderSummary />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
