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
import { AccountDataContent, Header } from '../components'

const Account = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header text="Account"/>
        <View style={styles.wrapper}>
          <AccountDataContent/>
        </View>
    </SafeAreaView>
  )
}

export default Account

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
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
 
})
