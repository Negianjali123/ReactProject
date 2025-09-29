import { configureStore } from '@reduxjs/toolkit';
import CardReducer from '../Component/cardAction/CardSlice';
import QuantityReducer from '../Component/cardAction/QuantitySlice';
export const store = configureStore({
  reducer: {
    Cardmanage: CardReducer,
    cart: QuantityReducer,
    // Add your slice reducers here
  },
});
