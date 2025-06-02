import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice.js";
import filtersReducer from "./filtersSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage: storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
