import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import dayjs from 'dayjs'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from '@rneui/themed';

const AppointmentDone = ({route, navigation}) => {

  
   const Formatdate = (date) => {
     return dayjs(date).format('MMMM D, YYYY')
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
        <View
          style={{
            marginTop: 35,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{ alignSelf: 'center', fontSize: 20, textAlign: 'center' }}
          >
            Your appointment was successfully created
          </Text>
          <Image
            source={require('../assets/images/Check.gif')}
            style={{ width: 150, height: 150, marginTop: 10 }}
          />
        </View>
        <View
          style={{ width: '100%', alignItems: 'flex-start', marginTop: 70 }}
        >
          <Text style={{ fontSize: 18 }}>{`Appointment Date: ${Formatdate(
            route.params.AppointmentDate
          )}`}</Text>
          <Text style={{ fontSize: 18 }}>
            Address: San Isidro, Placer, Surigao Del Norte
          </Text>
        </View>
        <Button
          title="Done"
          color='#03989E'
          buttonStyle={styles.RegisterButton}
       
          onPress={()=> navigation.navigate('List')}
        />
      </View>
    </SafeAreaView>
  )
}

export default AppointmentDone

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#D5F1F0',
    height: '100%',
  },
  buttonBackWrapper: {
    flexDirection: 'row',
    width: 'auto',
    alignItems: 'center',
  },
  backtext: {
    color: 'black',
    fontSize: 18,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 30,
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
  RegisterButton: {
    fontSize: 16,
    width: 150,
    borderRadius: 20,
    marginTop: 40,
  },
})

