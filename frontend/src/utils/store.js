import { configureStore } from '@reduxjs/toolkit';
import CardReducer from '../Component/cardAction/CardSlice';
import QuantityReducer from '../Component/cardAction/Quantity';
export const store = configureStore({
  reducer: {
    Cardmanage: CardReducer,
    Countmanage: QuantityReducer,
    // Add your slice reducers here
  },
});
