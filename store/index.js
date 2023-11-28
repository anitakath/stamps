import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./authSlice";
import cardsSliceReducer from './cardsSlice'


const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    cards: cardsSliceReducer,
    
  },
});

export default store;
