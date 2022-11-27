import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import warriorReducer from "./features/warrior/warriorSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "primary",
  keyPrefix: "",
  storage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, warriorReducer);

const store = configureStore({
  reducer: { warrior: persistedReducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;

export const persistor = persistStore(store);

export default store;
