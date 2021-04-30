import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// メール送信処理
export const fetchAsyncSendEmail = createAsyncThunk(
  "send/email",
  async (values) => {
    const res = await axios.post(`http://localhost:4000/send_email`, values, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    send: 0,
    result: false,
  },
  reducers: {
    sendEmail: (state) => {
      console.log("ddd");
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncSendEmail.fulfilled, (state, action) => {
      state.result = action.payload;
    });
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
export const { sendEmail, decrement, incrementByAmount } = emailSlice.actions;

export default emailSlice.reducer;
