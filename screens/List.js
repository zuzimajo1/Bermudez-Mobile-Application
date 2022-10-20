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
import { Header, SingleAppointments } from '../components'
import { GetAllAppointment } from '../redux/Reducer/Appointment'
import { PublicRequest } from '../RequestMethod'


const List = () => {
  const dispatch = useDispatch()
  const { firstname, middlename, lastname } = useSelector(
    (state) => state?.user?.user
  )
  const datas = useSelector((state) => state?.appointment?.appointment)
  const [refreshing, setrefreshing] = useState(false)

  const GetAllAppointmentByUser = async () => {
    try {
      const res = await PublicRequest.get(
        `appointment/find?firstname=${firstname}&middlename=${middlename}&lastname=${lastname}`
      )

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
    GetAllAppointmentByUser()
  }, [dispatch, refreshing])

  if (datas.length === 0) {
    return (
      <SafeAreaView style={styles.main}>
        <Header text='Your Appointment'/>
        <ScrollView
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              onRefresh={GetAllAppointmentByUser}
              refreshing={refreshing}
            />
          }
        >
          <View style={styles.wrapper2}>
            <Text style={styles.noAppointmentText}>No Appointment</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
 return (
   <SafeAreaView style={styles.main}>
     <Header
       text={datas.length > 1 ? 'Your Appointments' : 'Your Appointment'}
     />
     <ScrollView
       style={{ width: '100%' }}
       showsVerticalScrollIndicator={false}
       refreshControl={
         <RefreshControl
           onRefresh={GetAllAppointmentByUser}
           refreshing={refreshing}
         />
       }
     >
       <View style={styles.wrapper}>
         {datas?.map((items, index) => (
           <SingleAppointments key={index} {...items} />
         ))}
       </View>
     </ScrollView>
   </SafeAreaView>
 )

}

export default List

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
