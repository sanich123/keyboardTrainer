import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from '../../utils/const';

const incrementDecrement = createSlice({
  name: REDUCER_NAMES.counter,
  initialState: {value: 0},
  reducers: {
    incrementValue: (state) => {
      state.value += 1;
    },
    decrementValue: (state) => {
      state.value -= 1;
    },
    setValue: (state, { payload }) => {
      state.value = Number(payload);
    },
  },
});

export const { incrementValue, decrementValue, setValue } = incrementDecrement.actions;
export default incrementDecrement.reducer;
