import { FETCH_ORDERS_SUCCESS,FETCH_ORDERSID_SUCCESS, LOADING_PRODUCTS, ERROR_PRODUCTS,ORDERSID_DELETE_SUCCESS } from '../actionTypes'

const initialState = {
    orders: [],
    orderId: [],
    productsLoading: true,
    productsError: null,
    
}

function orderReducer(state = initialState,action) {
    switch (action.type) {
        case FETCH_ORDERS_SUCCESS :
            return {
                ...state,
                orders: action.payload
            }
        case FETCH_ORDERSID_SUCCESS :
            return {
                ...state,
                orderId: action.payload
            } 
        case ORDERSID_DELETE_SUCCESS :
          const id =action.payload
          const orders = state.orders.filter((order) => order.id !== id)
          return {
              ...state,
                  orders,
          }
        case LOADING_PRODUCTS:
          return {
            ...state,
            productsLoading: action.payload,
          };
    
        case ERROR_PRODUCTS:
          return {
            ...state,
            productsError: action.payload,
          };
        default:
            return state
    }
}


export default orderReducer