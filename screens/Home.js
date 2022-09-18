import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../redux/Reducer/UserReducer'

export default Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.wrapper}>
        <Text style={styles.mainTitle}>welcome</Text>
        <Text style={styles.submainTitle}>Choose your preferred Schedule</Text>
        <AppointmentForm/>
      </View>
    </SafeAreaView>
  )
}

const AppointmentForm = ()=>{
    const dispatch = useDispatch();

    const HandleLogout = ()=>{
        dispatch(LogoutUser());
    }


    return (
      <View style={styles.formMain}>
        <View style={styles.firstcontainer}>
          <Text style={styles.formText}>Select Month:</Text>
          <TextInput style={styles.formTextInput} autoCorrect={false} />
        </View>
        <View style={styles.secondcontainer}>
          <Text style={styles.formText}>Select Date:</Text>
          <TextInput style={styles.formTextInput} autoCorrect={false} />
        </View>
        <View style={styles.thirdcontainer}>
          <Text style={styles.formText}>Select Time:</Text>
          <TextInput style={styles.formTextInput} autoCorrect={false} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Book now"
            color="#03989E"
            buttonStyle={styles.AppointButton}
            />
          <Button
            title="Logout"
            color="#008037"
            buttonStyle={styles.LogoutButton}
            onPress={HandleLogout}
            />
            
        </View>
        
      </View>
    )
}






const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#38B6FF',
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
})