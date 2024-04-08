import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../feature/dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;