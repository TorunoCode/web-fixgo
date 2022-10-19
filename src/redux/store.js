// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./authSlice";
// import postReducer from "./postFeedbackSlice";
// export default configureStore({
//   reducer: {
//     auth: authReducer,
//     postFeedback: postReducer,
//   },
// });

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postFeedbackSlice";
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
  key: "root",
  version: 1,
  storage,
  blacklist: ["postFeedback"],
};
const rootReducer = combineReducers({
  auth: authReducer,
  postFeedback: postReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
