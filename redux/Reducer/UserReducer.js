import { createSlice } from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name: "user",
    initialState: {
        user: [],
        userLogin: false,
        userError: false,
    },
    reducers:{
        LoginUser: (state, action)=>{
            state.user = action.payload;
            state.userLogin = true;
        },
        LoginUserError : (state)=>{
            state.userLogin = false;
        },
        RegisterUser: (state, action)=>{
            state.user = action.payload;
            state.userLogin = true;
        },
        RegisterUserError : (state)=>{
            state.userLogin = false;
        },
        LogoutUser : (state)=>{
            state.user = [];
            state.userLogin = false;
        },
    }
})

export const {
  LoginUser,
  LoginUserError,
  RegisterUser,
  RegisterUserError,
  LogoutUser,
} = UserReducer.actions

export default UserReducer.reducer;