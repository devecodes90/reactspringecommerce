import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'

const OrderCard = () => {
  return (
    <div className='p-5 shadow-lg shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} xs={{justifyContent: "space-between"}}>
           <Grid item xs={6}>
             <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg" alt="" />
                
                <div className='ml-5 space-y-2'>
                    <p className='mb-2'>Artwork Tee — Iso Dots</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>

             </div>
           </Grid>

           <Grid item xs={2}>
             <p>$36.00</p>
           </Grid>

           <Grid item xs={4}>
             {true && <div>
                <p>
                <AdjustIcon xs={{width: "15px", height: "15px"}} className='text-green-600 nr-2 text-sm'/>
                <span>Delivered on August 1st</span>
                <span></span>
             </p>
             <p className='text-xs'>Your item has been delivered</p>
             </div>
              }
             {false && <p>
                <span>Expected Delivery on August 1st</span>
             </p>}
           </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard