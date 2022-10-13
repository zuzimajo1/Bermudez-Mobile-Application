import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl
} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, SingleAppointmentAdmin } from '../components'
import { PublicRequest } from '../RequestMethod'
import { GetAllAppointment } from '../redux/Reducer/Appointment'

const ListAdmin = ({navigation}) => {
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
            <SingleAppointmentAdmin
              key={index}
              {...items}
              navigation={navigation}
            />
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

})

