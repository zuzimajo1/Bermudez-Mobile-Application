import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { Header, InfoAbout } from '../components'

const Info = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header text="Info"/>
        <View style={styles.wrapper}>
          <InfoAbout/>
        </View>
    </SafeAreaView>
  )
}

export default Info

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
    paddingHorizontal: 10,
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
