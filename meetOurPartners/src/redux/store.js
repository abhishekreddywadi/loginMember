import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './slices/registrationSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
