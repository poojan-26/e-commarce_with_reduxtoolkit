import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartStatusReducer from "../features/cartStatusSlice";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";
import menuStatusReducer from "../features/menuStatusSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartStatusState: cartStatusReducer,
  cartState: cartReducer,
  menuStatusState: menuStatusReducer
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
export default store;
