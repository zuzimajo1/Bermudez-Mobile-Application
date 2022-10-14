import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InfoAbout = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.Titles}>clinic hours</Text>
      <Text style={styles.Details}>monday - saturday</Text>
      <Text style={styles.UppercaseText}>11:00am - 2:00pm</Text>
      <Text style={styles.UppercaseText}>4:00pm - until last patient</Text>
      <Text style={styles.NoticeTitle}>close on sundays</Text>
      <InfoNotice />
    </View>
  )
}

const InfoNotice = ()=>{
  return (
    <View style={styles.NoticeContainer}>
      <Text style={styles.centerText}>
        Patients are <Text style={styles.RequiredText}>required</Text> to wear{' '}
        <Text style={styles.UnderlineText}>face mask</Text> and{' '}
        <Text style={styles.UnderlineText}>face shield</Text> when seeing the
        doctor.
      </Text>
    </View>
  )
}

export default InfoAbout

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  Titles: {
    fontSize: 19,
    textTransform: 'uppercase',
    paddingBottom: 5,
  },
  UppercaseText: {
    fontSize: 19,
    textTransform: 'uppercase',
  },
  Details: {
    fontWeight: 'bold',
    fontSize: 19,
    textTransform: 'uppercase',
    color: '#3C3B3B',
  },
  NoticeTitle: {
    paddingVertical: 20,
    fontSize: 19,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#3C3B3B',
  },
  RequiredText: {
    textTransform: 'uppercase',
    color: '#EB6744',
    fontWeight: '700',
  },
  NoticeContainer: {
    paddingHorizontal: 25,
  },
  UnderlineText: {
    textTransform: 'uppercase',
    color: '#3C3B3B',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  centerText: {
    textAlign: 'center',
    fontSize: 19,
  },
})