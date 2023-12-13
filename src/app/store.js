import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./reducers/photoSlice";

export default configureStore({
    reducer:{
        photo: photoReducer
    }
})