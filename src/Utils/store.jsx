import { configureStore } from "@reduxjs/toolkit";
import selectedVideoReducer from "./SelectedVideoSlice";

const store = configureStore({
    reducer: {
        selectedVideo: selectedVideoReducer,
    }
})

export default store;