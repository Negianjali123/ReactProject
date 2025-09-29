import { createSlice } from '@reduxjs/toolkit';

const QuantitySlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      console.log("state", state);
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = QuantitySlice.actions;
export default QuantitySlice.reducer;
