import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  RefreshControl
} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button } from '@rneui/themed'
import { useDispatch, useSelector } from 'react-redux'
import { Header, SingleAppointmentAdmin } from '../components'
import { PublicRequest } from '../RequestMethod'
import { GetAllAppointment } from '../redux/Reducer/Appointment'

const ListAdmin = () => {
  const dispatch = useDispatch();
  const [refreshing, setrefreshing] = useState(false);
  const datas = useSelector((state)=> state?.appointment?.appointment);

   const GetAllAppointmentByAdmin = async () => {
    try {
      const res = await PublicRequest.get('appointment');
      dispatch(GetAllAppointment(res.data))
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      setrefreshing(false)
    }, 2000)
    return () => clearInterval(refreshInterval)
  }, [refreshing])

  useLayoutEffect(() => {
    GetAllAppointmentByAdmin();
  }, [dispatch, refreshing])

  
  if (datas.length === 0) {
    return (
      <SafeAreaView style={styles.main}>
        <Header text="List of Appointments" />
        <ScrollView
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              onRefresh={GetAllAppointmentByAdmin}
              refreshing={refreshing}
            />
          }
        >
          <View style={styles.wrapper2}>
            <Text style={styles.noAppointmentText}>No appointments</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.main}>
      <Header
        text={datas.length > 1 ? 'List of appointments' : 'List of appointment'}
      />
      <ScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            onRefresh={GetAllAppointmentByAdmin}
            refreshing={refreshing}
          />
        }
      >
        <View style={styles.wrapper}>
          {datas?.map((items, index) => (
            <SingleAppointmentAdmin key={index} {...items} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListAdmin


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#38B6FF',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    paddingVertical: 5,
  },
  wrapper2: {
    width: '100%',
    height: 570,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAppointmentText: {
    fontSize: 17,
  },
  mainTitle: {
    fontSize: 38,
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
  },
  submainTitle: {
    textAlign: 'center',
    fontSize: 19,
    paddingVertical: 10,
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
  image: {
    width: 300,
    height: 270,
  },
})

