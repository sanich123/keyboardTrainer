import { createSlice } from '@reduxjs/toolkit';

const incrementDecrement = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    incrementValue: (state) => {
      state.value += 1;
    },
    decrementValue: (state) => {
      state.value -= 1;
    },
  },
});

export const {
  incrementValue, decrementValue,
} = incrementDecrement.actions;

export default incrementDecrement.reducer;
