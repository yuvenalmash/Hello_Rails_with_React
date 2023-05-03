import { createSlice } from '@reduxjs/toolkit';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: 'Hello, World!',
  },

  reducers: {
    updateMessage(state, action) {
      state.message = action.payload;
    }
  }
});

export const { updateMessage } = greetingSlice.actions;

export default greetingSlice.reducer;
