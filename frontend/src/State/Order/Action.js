import axios from "axios";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";
const jwt = localStorage.getItem("jwt");


export const createOrder = (reqData) => async (dispatch) => {
    dispatch({type:CREATE_ORDER_REQUEST});
    console.log("dATAREQ",reqData);
    console.log("dATAREQjwt",jwt);
    try {
        const config={
            headers:{
                Authorization:`Bearer ${jwt}`,
                "Content-Type":"application/json",
            },
        };
       
        const {data} =await api.post(`/api/orders/`,
            reqData.address,
            config
           
        );
        console.log("data--",data);
        console.log("data_id",data._id);
        if(data._id){
            
            reqData.navigate({search:`step=2&order_id=${data._id}`})
        }
        console.log("created order - ",data);
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data
        });
    } catch (error) {
        console.log("catch error : ", error);
        dispatch({
            type:CREATE_ORDER_FAILURE,
            payload:error.message,
        });
    }
};

export const getOrderById = (orderId) => async (dispatch) => {
   
    // console.log('order dat',reqData);
    try {
        dispatch({type:GET_ORDER_BY_ID_REQUEST});
        console.log("orderId",orderId);
        const config={
            headers:{
                Authorization:`Bearer ${jwt}`,
                "Content-Type":"application/json",
            },
        };
       
        const {data} =await api.get(`/api/orders/${orderId}`,
            config);
        console.log("order by id",data);
        dispatch({
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data
        });
    } catch (error) {
        console.log("catch  ", error);
        dispatch({
            type:GET_ORDER_BY_ID_FAILURE,
            payload:error.message,
        });
    }
};