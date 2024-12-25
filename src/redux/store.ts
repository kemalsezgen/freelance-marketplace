import { configureStore } from '@reduxjs/toolkit';
import freelancersReducer from './freelancersSlice';
import themeReducer from './themeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root', 
  storage,
};

const persistedReducer = persistReducer(persistConfig, freelancersReducer);

export const store = configureStore({
  reducer: {
    freelancers: persistedReducer,
    theme: themeReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
