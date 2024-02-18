import {configureStore} from "@reduxjs/toolkit";
import {rockCoreApi} from "./services";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./features/userSlice";

export const createStore = (
    options
) =>
configureStore({
  reducer: {
    user: userSlice,
    [rockCoreApi.reducerPath]: rockCoreApi.reducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(rockCoreApi.middleware),
  ...options,
})

export const store = createStore()
// window.store = store
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector;
