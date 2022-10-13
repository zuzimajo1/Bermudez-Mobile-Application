import { PublicRequest } from "../RequestMethod";
import { AddAppointment, DeleteAppointment, GetAllAppointment, UpdateAppointment } from "./Reducer/Appointment";



export const CreateAppointmentByUser = async (dispatch, user)=>{
    try {
        const res = await PublicRequest.post('appointment', user);
        dispatch(AddAppointment(res.data));
    } catch (error) {
        console.log(error.response.data);
    }
}


export const DeleteAppointmentByUser = async (dispatch, id) => {
  try {
    const res = await PublicRequest.delete(`appointment/${id}`)
    dispatch(DeleteAppointment(id))
  } catch (error) {
    console.log(error.response.data)
  }
}

export const ChangeStatusApproved = async (setStatus, dispatch, user) => {
  try {
    const res = await PublicRequest.patch(`appointment?id=${user.id}`, user)
    dispatch(UpdateAppointment(user))
    setStatus(user.AppointmentStatus)
  } catch (error) {
    console.log(error.response.data)
  }
}

