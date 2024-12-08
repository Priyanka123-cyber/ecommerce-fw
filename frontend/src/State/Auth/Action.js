import { API_BASE_URL } from "../../config/apiConfig";
import axios from 'axios'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const token=localStorage.getItem("jwt");
const registerRequest=()=>({ type:REGISTER_REQUEST });
const registerSuccess=(user)=>({ type: REGISTER_SUCCESS,payload:user });
const registerFailure=(error)=>({ type: REGISTER_FAILURE,payload:error });
//signup method
export const register=(userData)=>async (dispatch)=>{
    dispatch(registerRequest())
    try {
        const response= await axios.post(`${API_BASE_URL}/auth/signup`,userData);
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        else {
            console.error("JWT not found in response.");
        }
        console.log("user",userData);
        dispatch(registerSuccess(user));//user.jwt
    } catch (error) {
        dispatch(registerFailure(error.message));
    }

}
//login action creators
const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error});
//login method
export const login=(userData)=>async (dispatch)=>{
    dispatch(loginRequest())
    console.log("user",userData);
    try {
        const response= await axios.post(`${API_BASE_URL}/auth/signin`,userData);
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(loginSuccess(user.jwt));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }

}

const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error});

// export const getUser=(token)=>async (dispatch)=>{
//     dispatch(getUserRequest())
//     try {
//         const response= await axios.post(`${API_BASE_URL}/api/users/profile`,{
//             headers:{
//                 "Authorisation":`Bearer ${token}`
//             }
//         });
//         const user=response.data;
//        console.log("user",user);
//         dispatch(getUserSuccess(user));
//     } catch (error) {
//         dispatch(getUserFailure(error.message));
//     }

// }

export const getUser = (jwt) => {
    return async (dispatch) => {
      dispatch({ type: GET_USER_REQUEST });
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
          headers:{
            "Authorization":`Bearer ${jwt}`
          }
        });
        const user = response.data;
        dispatch({ type: GET_USER_SUCCESS, payload: user });
        console.log("req User ",user)
      } catch (error) {
        const errorMessage = error.message;
        dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
      }
    };
  };
export const logout=()=>(dispatch)=>{
dispatch({type:LOGOUT,payload:null})
localStorage.clear();
}