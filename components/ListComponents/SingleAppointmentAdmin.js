import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { ChangeStatusApproved, DeleteAppointmentByUser } from '../../redux/apiCalls'


const SingleAppointmentAdmin = ({
  ClientFirstname,
  ClientMiddlename,
  ClientLastname,
  Address,
  AppointmentDate,
  createdAt,
  AppointmentStatus,
  id,
  navigation,
}) => {
  const dispatch = useDispatch()

  const Formatdate = (date) => {
    return dayjs(date).format('MMMM D, YYYY')
  }

 

  const HandleButtonView = () => {
    const user = {
      ClientFirstname,
      ClientMiddlename,
      ClientLastname,
      Address,
      AppointmentDate,
      createdAt,
      AppointmentStatus,
      id,
    }
    navigation.navigate('ViewAppointment', user)

  }

  const HandleButtonDelete = () => {
    DeleteAppointmentByUser(dispatch, id)
  }

  return (
    <View style={styles.main}>
      <View style={styles.wrapperClients}>
        <Text>
          Patient's Name:{' '}
          <Text
            style={styles.textbold}
          >{`${ClientFirstname} ${ClientMiddlename.slice(
            0,
            1
          )}. ${ClientLastname}`}</Text>
        </Text>
        <Text>
          Address: <Text style={styles.textbold}>{Address}</Text>
        </Text>
        <Text>
          Appointment on:{' '}
          <Text style={styles.textbold}>{Formatdate(AppointmentDate)}</Text>
        </Text>
        <Text>
          Created on:{' '}
          <Text style={styles.textbold}>{Formatdate(createdAt)}</Text>
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
          title="View"
          type="clear"
          buttonStyle={{ width: 80 }}
          titleStyle={styles.buttonApprove}
          onPress={HandleButtonView}
        />
        <Button
          title="Delete"
          type="clear"
          buttonStyle={{ width: 80 }}
          titleStyle={styles.buttonDelete}
          onPress={HandleButtonDelete}
        />
      </View>
    </View>
  )
}

export default SingleAppointmentAdmin

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  wrapperClients: {
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  buttonCancel: {
    border: 'none',
    width: 80,
    marginVertical: 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonApprove: {
    color: '#2E8BF3',
    fontWeight: '700',
  },
  buttonDeny: {
    color: '#F0887C',
    fontWeight: '700',
  },
  buttonDelete: {
    color: '#F3432E',
    fontWeight: '700',
  },
})
