import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InfoAbout = () => {
  return (
    <View>
      <Text style={styles.Details}>
        <Text style={styles.Titles}>About:{" "}</Text>Bermudez Medical Clinic was
        operating services for more than 2 years. It was lead by Bermudez.
      </Text>
      <Text style={styles.Details}>
        <Text style={styles.Titles}>Location:{" "}</Text>It was located in San
        Isidro, Placer, Surigao Del Norte.
      </Text>
    </View>
  )
}

export default InfoAbout

const styles = StyleSheet.create({
  Titles:{
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: '700',
    marginRight: 10,
  },
  Details: {
    textAlign: 'justify',
    fontSize: 17,
    paddingBottom: 10,

  },
})