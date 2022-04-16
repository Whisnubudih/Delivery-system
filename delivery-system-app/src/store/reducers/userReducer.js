import { LOADING_PRODUCTS, ERROR_PRODUCTS,FETCH_USERS_SUCCESS } from '../actionTypes';

const initialState = {
  users: [],
  userLoading: true,
  userError: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS :
        return {
            ...state,
            users: action.payload
        }
    case LOADING_PRODUCTS:
      return {
        ...state,
        userLoading: action.payload,
      };

    case ERROR_PRODUCTS:
      return {
        ...state,
        userError: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;