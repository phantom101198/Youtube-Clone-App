import { createSlice } from "@reduxjs/toolkit";

const selectedVideo = createSlice({
    name: "selectedVideo",
    initialState: {
        selectedVideoData: null,
    },
    reducers: {
        addSelectedVideoDetail: (state, action) => {
            state.selectedVideoData =  action.payload;
        },
        removeSelectedVideoDetail: (state) => {
            state.selectedVideoData = null;
        }
    },
})

export const { addSelectedVideoDetail, removeSelectedVideoDetail } = selectedVideo.actions;
export default selectedVideo.reducer;