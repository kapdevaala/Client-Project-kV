import { configureStore } from "@reduxjs/toolkit";
import authResucer from "./slices/authSlice";

export default configureStore({
  reducer: {
    auth: authResucer,
  },
});
