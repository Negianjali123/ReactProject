import { createSlice } from '@reduxjs/toolkit';
// import { array } from 'zod';

const CardSlice = createSlice({                  // createSlice is used to create a slice of the Redux store
  name: 'Cardmanage',                           // Name of the slice
  initialState: { QUANTITY: 0 },
  reducers: {
    addItem: (state, action) => {
      console.log("action.payload", action.payload);
     
      // return state.map(item =>
      //   item.id === action.id ? { ...item, value: newValue } : item
      // );
      // return [...state, action.payload];
      //  state.push(action.payload); // ✅ new item added
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id); // ✅ item removed
    }
    // increment: (state) => { state.QUANTITY += 1; },
    // decrement: (state) => { state.QUANTITY -= 1; },
  },
});

export const { addItem, remove } = CardSlice.actions;
export default CardSlice.reducer;
