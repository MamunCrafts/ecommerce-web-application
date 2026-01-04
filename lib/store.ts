import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './features/cart/cartSlice';
import orderReducer from './features/cart/orderSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedCartReducer = persistReducer({ ...persistConfig, key: 'cart' }, cartReducer);
const persistedOrderReducer = persistReducer({ ...persistConfig, key: 'order' }, orderReducer);

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: persistedCartReducer,
      order: persistedOrderReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
