import { createSlice } from "@reduxjs/toolkit";

export const postFeedbackSlice = createSlice({
  name: "postFeedback",
  initialState: {
    postFeedbacks: [],
  },
  reducers: {
    createPostFeedback: (state, action) => {
      state.postFeedbacks = [...state.postFeedbacks, action.payload];
    },
  },
});
export const { createPostFeedback } = postFeedbackSlice.actions;
export default postFeedbackSlice.reducer;
