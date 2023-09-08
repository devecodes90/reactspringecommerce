import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import {Grid} from '@mui/material'

export default function OrderDetails() {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard/>
            </div>
            <div className='w-full py-20'>
                <OrderTracker activeStep={3}/>
            </div>
            <Grid className='space-x-5' container>
                <Grid item container className='shadow-xl rounded-md p-5 border'
                    sx={
                        {
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                }>
                    <Grid item
                        xs={6}>
                        <div>
                            <img className='w-[5] h-[5] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU" alt=""/>
                            <div className='space-y-2 ml-5'>
                                <p>Todd Snyder Fall 2023</p>
                                <p className='space-x-5'><span>Color: pink</span> <span>Size: M</span></p>
                                 <p>Seller: linaria</p>
                                 <p>$199</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
