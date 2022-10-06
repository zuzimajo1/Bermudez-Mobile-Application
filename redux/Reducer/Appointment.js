import { createSlice } from "@reduxjs/toolkit";

const AppointmentReducer = createSlice({
    name: "appointment",
    initialState:{
        appointment : [],
        appointSuccess: false,
    },
    reducers:{
        GetAllAppointment : (state, action)=>{
            state.appointment = action.payload;
            state.appointSuccess = true;
        },
        AddAppointment : (state, action)=>{
            state.appointment.push(action.payload);
            state.appointSuccess = true;
        },
       
        DeleteAppointment : (state, action)=>{
         state.appointment =  state.appointment.filter(
            (items) => items.id !== action.payload
          )
        },
        UpdateAppointment : (state,action)=>{
            state.appointment[state.appointment.findIndex((items)=> items.id === action.payload.id)] = action.payload
        },
        LogoutAppointment: (state)=>{
            state.appointment = [];
        }
    }
})


export const {
  GetAllAppointment,
  AddAppointment,
  DeleteAppointment,
  UpdateAppointment,
  LogoutAppointment,
} = AppointmentReducer.actions

export default AppointmentReducer.reducer;