import { createSlice } from '@reduxjs/toolkit';

const CardQuantitySlice = createSlice({                  // createSlice is used to create a slice of the Redux store
  name: 'Countmanage',                           // Name of the slice
  initialState: { QUANTITY: 0 },
  reducers: {
    CountQuantity: (state, action) => {
      switch (action.type) {
        case "increment":
            return state.map((item) => {
                if (item.id === action.id) {
                    return { ...item, QUANTITY: item.QUANTITY + 1 };
            
                }
                return item;
            });
        case "decrement":
            return state.map((item) => {
                if (item.id === action.id && item.QUANTITY > 0) {
                    return { ...item, QUANTITY: 0 };
                }
                return item;
            });
        default:
            return state;
    }            // Update the state with the payload from the action
    },
    // increment: (state) => { state.QUANTITY += 1; },
    // decrement: (state) => { state.QUANTITY -= 1; },
  },
});

export const { CountQuantity} = CardQuantitySlice.actions;
export default CardQuantitySlice.reducer;
