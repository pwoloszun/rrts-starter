import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as api from './api';

export const counterSliceId = 'counter';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// thunks
export const thunks = {
  incrementAsync: createAsyncThunk(
    `${counterSliceId}/incrementAsync`,
    async (amount: number, thunkAPI) => {
      const value = await api.delayValue(amount, 1800);
      return value;
    }
  ),
};

const counterSlice = createSlice({
  name: counterSliceId,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(thunks.incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

// action creators
export const { actions } = counterSlice;

// reducer
export default counterSlice.reducer;
