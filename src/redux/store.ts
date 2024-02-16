import {configureStore} from "@reduxjs/toolkit";
import {rockCoreApi} from "./services";

export const createStore = (
    options
) =>
configureStore({
  reducer: {
    [rockCoreApi.reducerPath]: rockCoreApi.reducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(rockCoreApi.middleware),
  ...options,
})

export const store = createStore()

// export const store = configureStore({
//   reducer: {
//     [generatorCoreApi.reducerPath]: generatorCoreApi.reducer,
//     possibility: possibilityReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(generatorCoreApi.middleware),
// });
