import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
const jwt = localStorage.getItem("jwt");

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST })

    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
        const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
            , {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
        console.log(data)
    } catch (error) {
        console.log(error)
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })

    }
}

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })

    const { productId } = reqData;
    console.log("product id", productId);
    try {
        const { data } = await api.get(`/api/products/id/${productId}`
            , {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            }
        )
        console.log("product data", data)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })

    }
}