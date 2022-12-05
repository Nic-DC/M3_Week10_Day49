import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favoriteReducer from "../reducers/favoriteReducer";
import jobsResultReducer from "../reducers/jobsResultReducer";

const allReducers = combineReducers({ favorites: favoriteReducer, jobsResult: jobsResultReducer });

const store = configureStore({ reducer: allReducers });
export default store;
