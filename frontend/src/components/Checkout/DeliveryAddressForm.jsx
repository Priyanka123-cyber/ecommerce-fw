import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Box, Button, Grid, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = () => {
    // Redux hooks for dispatch and state access
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector(store => store)// Accessing the authentication state

    // Getting JWT token from local storage
    const jwt = localStorage.getItem("jwt");
    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Extract form data
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber")
        }
        const orderData = { address, navigate, jwt }// Order data to be dispatched
        console.log("orderData", orderData);
        dispatch(createOrder(orderData)); // Dispatch createOrder action with order data   
    }


    return (
        <div>
            <Grid container spacing={4}>   
                {/* Delivery Address Form */}
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='firstName' name='firstName' label='First Name' fullWidth autoComplete="given-name" />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='lastName' name='lastName' label='Last Name' fullWidth autoComplete="given-name" />

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required id='address' name='address' label='Address' fullWidth autoComplete="given-name" multiline rows={6} />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='city' name='city' label='City' fullWidth autoComplete="given-name" />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='state' name='state' label='State/Province/Region' fullWidth autoComplete="given-name" />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='zip' name='zip' label='Pincode' fullWidth autoComplete="shipping postal-code" />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='phoneNumber' name='phoneNumber' label='Phone Number' fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button sx={{ py: 1.5, mt: 2, bgcolor: "black" }} size='large' variant='contained' type="submit">Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm