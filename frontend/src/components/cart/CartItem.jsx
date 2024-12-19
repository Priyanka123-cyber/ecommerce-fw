import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../State/Cart/Action';
const CartItem = ({item}) => {
    const dispatch=useDispatch();
    // const jwt=localStorage.getItem("jwt")
    const handleUpdateCartItem=(num)=>{
        const jwt = localStorage.getItem('jwt');
        const data={data:{quantity:item.quantity+num},cartItemId:item?._id,jwt}
        dispatch(updateCartItem({data}))
    }
    // const handleRemoveCartItem=()=>{
    //     dispatch(removeCartItem(item._id))
    // }
    const handleRemoveCartItem = () => {
        const jwt = localStorage.getItem('jwt');  // Get JWT token
        if (jwt) {
            dispatch(removeCartItem(item._id, jwt));  // Pass both item._id and jwt
        } else {
            console.error('JWT token is missing');
        }
    };
    
    
    
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt="" />
                </div>
                <div className='ml-5 space-y-1 '>
                    <p className='font-semibold'>{item.product.title}</p>
                    <p className='opacity-70'>Size: {item.size} , white</p>
                    <p className='opacity-70'>Seller:{item.product.brand}</p>
                    <div className='flex space-x-5 items-center pt-6 text-gray-900'>
                        <p className='font-semibold'>₹{item.discountedPrice} </p>
                        <p className='opacity-50 line-through'>₹{item.price}</p>
                        <p className='text-green-600 font-semibold'>{item.product.discountPercent}% off</p>
                    </div>
                </div>
               
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton onClick={()=>handleUpdateCartItem(-1) }disabled={item.quantity<=1} >
                        <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span> 
                        <IconButton onClick={()=>handleUpdateCartItem(1) } sx={{color:'black'}} >
                        <AddCircleOutlineIcon/>
                        </IconButton>
                        </div>
                    <div>
                        <Button onClick={handleRemoveCartItem} sx={{color:'black'}}>Remove</Button>
                    </div>
                </div>
        </div>
    )
}

export default CartItem