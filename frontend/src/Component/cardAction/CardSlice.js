import { createSlice } from '@reduxjs/toolkit';
// import { array } from 'zod';

const CardSlice = createSlice({                  // createSlice is used to create a slice of the Redux store
  name: 'Cardmanage',
  initialState: {
    items: [],
  },
  reducers: {
    addtocard(state, action) {
      console.log("state", state);
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.QUANTITY += 1;
      } else {
        state.items.push({ ...action.payload, QUANTITY: 1 });
      }
    },
    removetocard(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      console.log("existing",  state.items );
    },
    increment(state, action) {
      const existing = state.items.find(item => item.id === action.payload.id);
      console.log("existing", existing );
      if (existing ) {
        existing.QUANTITY += 1;
      } 
    },
    decrement(state, action) {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing ) {
        existing.QUANTITY -= 1;
      } 
    },
  },
});

export const { addtocard, removetocard,increment,decrement } = CardSlice.actions;
export default CardSlice.reducer;
