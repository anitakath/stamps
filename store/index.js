import { configureStore } from "@reduxjs/toolkit";

import thunkMiddleware from "redux-thunk";

import authSliceReducer from "./authSlice";
import cardsSliceReducer from './cardsSlice'
import userReducer from './userSlice'
import inputReducer from './inputSlice'
import registeredUsersReducer  from "./registeredUsersSlice";


const store = configureStore({
  reducer: {
    auth: authSliceReducer, //login
    cards: cardsSliceReducer,
    user: userReducer,
    input: inputReducer, //input validation, registration
    registeredUsers: registeredUsersReducer,
  },
  middleware: [thunkMiddleware],
  
});

export default store;
