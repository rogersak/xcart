import {ADD_TO_CART, REMOVE_TO_CART} from '../Constans'


export const addToCart = (data) => {
    console.log(data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}



export const removeToCart = (data) => {
    return{
        type:REMOVE_TO_CART,
        data: data
    }
}

