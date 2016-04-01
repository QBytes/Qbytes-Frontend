import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { authStateReducer } from "redux-auth";

const rootReducer = combineReducers({
  routing: routerReducer,
  auth: authStateReducer
});

export default rootReducer;
