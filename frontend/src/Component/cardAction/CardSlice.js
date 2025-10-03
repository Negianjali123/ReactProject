import { createSlice } from '@reduxjs/toolkit';
// import { array } from 'zod';

const CardSlice = createSlice({                  // createSlice is used to create a slice of the Redux store
  name: 'Cardmanage',
  initialState: {
    items: [],
  },
  reducers: {
    addtocard(state, action) {
      console.log("state", action.payload);
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        console.log("if cahla");
        existing.QUANTITY += 1;
      } else {
        console.log("else chala");
        state.items.push({ ...action.payload, QUANTITY: 1 });
      }
    },
    removetocard(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      console.log("existing",  state.items );
    },
    increment(state, action) {
      const existing  = state.items.find(item => item.id === action.payload.id);
      // console.log("action", action.payload );
      // console.log("existing", existing.QUANTITY );
     
      if (existing && existing.QUANTITY >=1) {
        existing.QUANTITY += 1;
      } 
      // debugger;
    },
    decrement(state, action) {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing && existing.QUANTITY >1) {
        existing.QUANTITY -= 1;
      } 
    },
    cookiesitem(state, action) {
      action.payload.forEach((newItem) => {
        const exists = state.items.find(item => item.id === newItem.id);
        if (!exists) {
          state.items.push({ ...newItem });
        }
      });
      
    }
  },
});

export const { addtocard, removetocard,increment,decrement,cookiesitem } = CardSlice.actions;
export default CardSlice.reducer;
