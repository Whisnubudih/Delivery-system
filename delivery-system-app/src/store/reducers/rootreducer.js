import { combineReducers } from 'redux';
import userReducer from './userReducer';
import orderReducer from './orderReducer';
import menuReducer from './menuReducer';


const rootReducer = combineReducers({
    orderReducer,
  userReducer,
  menuReducer,
  
});

export default rootReducer;