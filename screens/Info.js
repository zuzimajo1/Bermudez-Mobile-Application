import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native'
import React from 'react'
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

})
