import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from '@rneui/themed'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from 'react-native-modern-datepicker'
import dayjs from 'dayjs'
import { CreateAppointmentByUser } from '../redux/apiCalls'

export default Appointment = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [Omited, setOmited] = useState(false)
  const dispatch = useDispatch();
  const { firstname, middlename, lastname, address } = useSelector((state)=> state?.user?.user);

  const HandleAppointment = ()=>{
    if(selectedDate){
      const user = {
        ClientFirstname: firstname,
        ClientMiddlename: middlename,
        ClientLastname: lastname,
        Address: address,
        AppointmentDate: String(selectedDate),
      }
       CreateAppointmentByUser(dispatch, user)
       navigation.navigate('AppointmentDone', user)
    }else{
      setOmited(true);
    }
  }

   useEffect(() => {
     const IntervalButton = setInterval(() => {
       setOmited(false)
     }, 1000)
     return () => clearInterval(IntervalButton)
   }, [Omited])





  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.wrapper}>
        <Text style={styles.mainTitle}>Set Appointment</Text>
        <Text style={styles.submainTitle}>Choose your preferred Schedule</Text>
        <View style={styles.CalendarWrapper}>
          <AppointmentCalendar setSelectedDate={setSelectedDate} />
          {setSelectedDate && (
            <View>
              <AppointmentStatus selectedDate={selectedDate} />
              <View style={styles.buttonContainer}>
                <Button
                  title="Select"
                  color={Omited ? '#EC5442' : '#03989E'}
                  buttonStyle={styles.RegisterButton}
                  onPress={HandleAppointment}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

const AppointmentCalendar = ({ setSelectedDate }) => {
  return (
    <DatePicker
      mode="calendar"
      onSelectedChange={(date) => {
        setSelectedDate(date)
      }}
      style={{ borderRadius: 4 }}
    />
  )
}

const AppointmentStatus = ({ selectedDate }) => {
  const appointmentDate = dayjs(selectedDate).format('MMMM D, YYYY')

  return (
    <View>
      <Text style={styles.TextAppointment}>Set appointment on:</Text>
      {selectedDate && (
        <Text style={styles.AppointmentSched}>{appointmentDate}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#38B6FF',
    height: '100%',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 30,
  },
  mainTitle: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
  },
  submainTitle: {
    textAlign: 'center',
    fontSize: 19,
    paddingVertical: 5,
  },
  firstcontainer: {
    width: '100%',
    marginTop: 20,
  },
  secondcontainer: {
    width: '100%',
    marginTop: 40,
  },
  thirdcontainer: {
    width: '100%',
    marginTop: 40,
  },
  formMain: {
    width: '100%',
    height: '100%',
    paddingVertical: 6,
  },
  formText: {
    textTransform: 'capitalize',
    color: 'black',
    fontSize: 16,
    paddingVertical: 12,
    textAlign: 'center',
  },
  formTextInput: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: 'rgba(0,0,0,0.6)',
    height: 36,
    backgroundColor: 'white',
  },

  normalText: {
    color: 'white',
    fontSize: 13,
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 35,
    alignItems: 'center',
    width: '100%',
  },
  AppointButton: {
    fontSize: 20,
    width: 200,
    borderRadius: 20,
  },
  LogoutButton: {
    fontSize: 20,
    width: 200,
    borderRadius: 20,
    marginTop: 10,
  },
  CalendarWrapper: {
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
  TextAppointment: {
    marginTop: 20,
    fontSize: 18,
    alignSelf: 'center',
  },
  AppointmentSched: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  RegisterButton: {
    width: 115,
    borderRadius: 20,
    fontSize: 16,
  },
})
