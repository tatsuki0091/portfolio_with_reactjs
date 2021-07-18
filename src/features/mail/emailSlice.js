import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// メール送信処理
export const fetchAsyncSendEmail = createAsyncThunk(
  "send/email",
  async (values) => {
    const res = await axios.post(`http://localhost:4000/send_email`, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    result: false,
    modal: false,
    isLoading: false,
  },
  reducers: {
    setOpenModal(state) {
      state.modal = true;
    },
    resetOpenModal(state) {
      state.modal = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    resetIsLoading(state) {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchAsyncSendEmail.fulfilled, (state, action) => {
    //   console.log("frdfsf");
    //   state.result = action.payload;
    // });
  },
  // extraReducer追加
  // extraReducers: (builder) => {
  //   // fetchAsyncLoginメソッドがfulfilledだった場合の処理
  //   // ログインが成功した場合はJWTをローカルストレージに格納
  //   builder.addCase(fetchAsyncSendEmail.fulfilled, (state, action) => {
  //     localStorage.setItem("localJWT", action.payload.access);
  //   });
  // },
  // extraReducer追加
});

// Action creators are generated for each case reducer function
export const { sendEmail, setIsLoading, resetIsLoading } = emailSlice.actions;

export const selectOpenProfile = (state) => state.email.modal;
export const selectIsLoading = (state) => state.email.isLoading;
export default emailSlice.reducer;
