import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import dayjs from 'dayjs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from '@rneui/themed'
import { PublicRequest } from '../RequestMethod'
import { ChangeStatusApproved } from '../redux/apiCalls'
import { useDispatch } from 'react-redux'

const ViewAppointment = ({ navigation, route }) => {
  const [Info, setInfo] = useState(null)
  const dispatch = useDispatch();
  const {  ClientFirstname,
      ClientMiddlename,
      ClientLastname,
      Address,
      AppointmentDate,
      createdAt,
      AppointmentStatus,
      id } = route.params;

  const [Status, setStatus] = useState(AppointmentStatus);
  const Formatdate = (date) => {
    return dayjs(date).format('MMMM D, YYYY')
  }

  useLayoutEffect(() => {
    const getInfoClient = async () => {
      try {
        const res = await PublicRequest.get(
          `auth/find?firstname=${ClientFirstname}&middlename=${ClientMiddlename}&lastname=${ClientLastname}`
        )
        setInfo(res.data)
      } catch (error) {
        console.log(error.response.data)
      }
    }

    getInfoClient()
  }, [route])

  const HandleButtonApprove = ()=>{
    const user = {id, ClientFirstname, ClientMiddlename, ClientLastname, Address, AppointmentDate, createdAt, AppointmentStatus: 'Approved', id};
    ChangeStatusApproved(setStatus, dispatch, user)
  }

  const HandleButtonDeny = ()=>{
    const user = {id, ClientFirstname, ClientMiddlename, ClientLastname, Address, AppointmentDate, createdAt, AppointmentStatus: 'Denied', id};
    ChangeStatusApproved(setStatus, dispatch, user)
  }

  if (Info === null) {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.loading}>
          <Image
            source={require('../assets/images/Loading.gif')}
            style={{ width: 250, height: 250, marginTop: 10 }}
          />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={{ paddingVertical: 10 }}>
        <TouchableOpacity
          style={styles.buttonBackWrapper}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
          <Text style={styles.backtext}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.backwrapper}>
          <Text style={styles.appointmentNo}>Appointment no: {id}</Text>
        </View>
        <View style={styles.clientwrapper}>
          <Text
            style={styles.normaltext}
          >{`Name: ${ClientFirstname} ${ClientMiddlename.slice(
            0,
            1
          )}. ${ClientLastname} `}</Text>
          <Text style={styles.normaltext}>{`Appointment Date: ${Formatdate(
            AppointmentDate
          )}`}</Text>
          <Text style={styles.normaltext}>{`Created On: ${Formatdate(
            createdAt
          )}`}</Text>
          <Text style={styles.normaltext}>Appointment Status: {Status}</Text>
        </View>
        <View style={styles.clientwrapper}>
          <Text style={styles.clientInfoTitle}>client information</Text>
          <Text style={styles.normaltext}>Address: {Info[0]?.address}</Text>
          <Text style={styles.normaltext}>Birthday: {Info[0]?.birthday}</Text>
          <Text style={styles.normaltext}>Sex: {Info[0]?.sex}</Text>
          <Text style={styles.normaltext}>
            Occupation: {Info[0]?.occupation}
          </Text>
          <Text style={styles.normaltext}>
            Nearest Kin: {Info[0]?.nearestKin}
          </Text>
          <Text style={styles.normaltext}>
            Occupation: {Info[0]?.occupation2}
          </Text>
          <Text style={styles.normaltext}>
            Relationship: {Info[0]?.relationship}
          </Text>
        </View>
        {Status === 'Pending' && (
          <View style={styles.statusButton}>
            <Button
              title="Approved"
              type="clear"
              buttonStyle={{ width: 120 }}
              titleStyle={styles.buttonApprove}
              onPress={HandleButtonApprove}
            />
            <Button
              title="Deny"
              type="clear"
              buttonStyle={{ width: 120 }}
              titleStyle={styles.buttonDeny}
              onPress={HandleButtonDeny}
            />
          </View>
        )}
        <Button
          title="Done"
          color="#03989E"
          buttonStyle={styles.RegisterButton}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  )
}

export default ViewAppointment

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#38B6FF',
    height: '100%',
  },
  buttonBackWrapper: {
    flexDirection: 'row',
    width: 'auto',
    alignItems: 'center',
  },
  buttonApprove: {
    color: '#1568E7',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonDeny: {
    color: '#CB2811',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loading: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusButton: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appointmentNo: {
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
  backwrapper: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backtext: {
    color: 'black',
    fontSize: 18,
  },
  normaltext: {
    fontSize: 18,
  },
  clientwrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 40,
  },
  clientInfoTitle: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '700',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 30,
  },
  normalText: {
    color: 'white',
    fontSize: 13,
  },
  image: {
    width: 300,
    height: 270,
  },
  RegisterButton: {
    fontSize: 16,
    width: 150,
    borderRadius: 20,
    marginTop: 40,
  },
})
