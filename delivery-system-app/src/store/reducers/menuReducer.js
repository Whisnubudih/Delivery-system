import { FETCH_MENUS_SUCCESS,FETCH_MENUSID_SUCCESS, LOADING_PRODUCTS, ERROR_PRODUCTS,MENUSID_DELETE_SUCCESS } from '../actionTypes'

const initialState = {
    menus: [],
    menuId: [],
    productsLoading: true,
    productsError: null,
    
}

function menuReducer(state = initialState,action) {
    switch (action.type) {
        case FETCH_MENUS_SUCCESS :
            return {
                ...state,
                menus: action.payload
            }
        case FETCH_MENUSID_SUCCESS :
            return {
                ...state,
                    menuId: action.payload
            } 
        case MENUSID_DELETE_SUCCESS :
          const id =action.payload
          const menus = state.menus.filter((menu) => menu.id !== id)
          return {
              ...state,
                  menus,
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


export default menuReducer