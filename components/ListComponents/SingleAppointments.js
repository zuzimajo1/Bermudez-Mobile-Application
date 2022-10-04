import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import dayjs from 'dayjs'
import { DeleteAppointmentByUser } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';
const SingleAppointments = ({
  id,
  AppointmentDate,
  createdAt,
  AppointmentStatus
}) => {
  const dispatch = useDispatch();

  const Formatdate = (date) =>{
    return dayjs(date).format('MMMM D, YYYY')
  }

  return (
    <View style={styles.main}>
      <View>
        <Text>
          Appointment on:{' '}
          <Text style={styles.textbold}>{Formatdate(AppointmentDate)}</Text>
        </Text>
        <Text>
          Created on: <Text style={styles.textbold}>{Formatdate(createdAt)}</Text>
        </Text>
        <Text>
          Status:{' '}
          <Text
            style={{
              color:
                AppointmentStatus === 'Pending'
                  ? 'orange'
                  : AppointmentStatus === 'Approved'
                  ? 'green'
                  : AppointmentStatus === 'Denied'
                  ? 'red'
                  : 'N/A',
              textTransform: 'uppercase',
            }}
          >
            {AppointmentStatus}
          </Text>
        </Text>
      </View>
      <View style={styles.cancelwrapper}>
        <Button
          title="Delete"
          color="#F0887C"
          buttonStyle={styles.buttonCancel}
          onPress={()=> DeleteAppointmentByUser(dispatch, id)}
        />
      </View>
    </View>
  )
}

export default SingleAppointments

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  textbold: {
    fontWeight: '700',
  },
  cancelwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  canceltext: {
    fontSize: 17,
    textTransform: 'uppercase',
  },
  buttonCancel:{
    border: 'none',
  }
})