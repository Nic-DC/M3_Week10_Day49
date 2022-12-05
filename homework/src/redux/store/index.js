import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favoriteReducer from "../reducers/favoriteReducer";

const allReducers = combineReducers({ favorites: favoriteReducer });

const store = configureStore({ reducer: allReducers });
export default store;
