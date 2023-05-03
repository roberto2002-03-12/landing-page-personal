import { configureStore } from '@reduxjs/toolkit';
import { statusSlice } from '.';

export const store = configureStore({
  reducer: {
    status: statusSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});