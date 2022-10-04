import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({text}) => {
  return (
    <View style={styles.HeaderMain}>
      <Text style={styles.HeaderText}>{text}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    HeaderMain:{
        width: '100%',
        height: 70,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',

    },
    HeaderText: {
        alignSelf: 'center',
        fontSize: 21,
        fontWeight: '600',
    }

})