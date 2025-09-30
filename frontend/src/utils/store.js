import { configureStore } from '@reduxjs/toolkit';
import QuantityReducer from '../Component/cardAction/QuantitySlice';
import CardReducer from '../Component/cardAction/CardSlice';
export const store = configureStore({
  reducer: {
    cart: QuantityReducer,
    Cardmanage: CardReducer,
  },
});
