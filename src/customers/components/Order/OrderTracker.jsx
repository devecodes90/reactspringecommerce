import React from 'react'
import { Stepper } from '@mui/material';
import { Step, StepLabel } from '@mui/material';

const step = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div>
        <Stepper activeStep={activeStep} alternativeLabel>
            {step.map((label) => <Step><StepLabel sx={{ color: '#9155FD', fontSize: '44px' }}>{label}</StepLabel></Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker
