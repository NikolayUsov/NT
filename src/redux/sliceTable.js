import { createSlice } from '@reduxjs/toolkit';

const initialState = { orderData: [] };

const sliceTable = createSlice({
  name: 'sliceTable',
  initialState,
  reducers: {
    addItem(state, action) {
      state.orderData.unshift(action.payload)
    },
  },
})

export const { addItem } = sliceTable.actions;
export default sliceTable.reducer;
