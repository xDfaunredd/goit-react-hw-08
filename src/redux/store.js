import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/slice";
import { authReducer } from "./auth/slice";
import { filterSlice } from "./filters/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root-auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filterSlice,
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
