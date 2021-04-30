import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "../features/mail/emailSlice";

export default configureStore({
  reducer: {
    email: emailReducer,
  },
});
