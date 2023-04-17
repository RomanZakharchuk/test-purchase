import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { purchaseReducer } from "./slices/purchase";


const rootReducer = combineReducers({
  purchases: purchaseReducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer
});