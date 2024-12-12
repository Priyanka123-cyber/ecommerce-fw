import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

export const getCart=(jwt)=>async (dispatch)=>{
    

    try {
        dispatch({type:GET_CART_REQUEST})
        const config={
            headers:{
                Authorization:`Bearer ${jwt}`,
                "Content-Type":"application/json",
            },
        };
        const {data} =await api.get(`/api/cart/`,config)
        dispatch({type:GET_CART_SUCCESS,payload:data});
        console.log("cart ",data)

    } catch (error) {
        dispatch({type:GET_CART_FAILURE,payload:error.message})

    }
}

export const addItemToCart=(reqData)=>async (dispatch)=>{
    

    try {
        dispatch({type:ADD_ITEM_TO_CART_REQUEST})
        const config={
            headers:{
                Authorization:`Bearer ${reqData.jwt}`,
                "Content-Type":"application/json",
            },
        };
        const {data} = await api.put("/api/cart/add",reqData.data,config)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data})
        console.log("add item to cart",data)

    } catch (error) {
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message})

    }
}

export const removeCartItem=(reqData,jwt)=>async (dispatch)=>{
    console.log("reqDAta",reqData);
    console.log("jwt",jwt);  // Check if the token is properly structured

   

    try {
        dispatch({type:REMOVE_CART_ITEM_REQUEST})
        const config={
            headers:{
                Authorization:`Bearer ${jwt}`,
                "Content-Type":"application/json",
            },
        };
        const {data} = await api.delete(`/api/cart_items/${reqData}`,config)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:reqData})

    } catch (error) {
        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message})

    }
}

export const updateCartItem=(reqData,jwt)=>async (dispatch)=>{
   
    console.log("reqDAta",reqData);
    console.log("jwt",reqData.data.jwt);
    try {
        dispatch({type:UPDATE_CART_ITEM_REQUEST})
        const config={
            headers:{
                Authorization:`Bearer ${reqData.data.jwt}`,
                "Content-Type":"application/json",
            },
        };
        const {data} = await api.put(`/api/cart_items/${reqData.data.cartItemId}`,reqData.data,config)
        dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.message})

    }
}