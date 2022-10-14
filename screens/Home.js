import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,

  ScrollView,
  Image
} from 'react-native'
import React from 'react'

export default Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.mainTitle}>welcome</Text>
          <ClinicImage />
          <Text style={styles.submainTitle}>Bermudez Medical Clinic</Text>
          <Text style={styles.address}>Barangay San Isidro, Placer, SDN</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const ClinicImage = () => (
  <Image
    style={styles.image}
    source={require('../assets/images/Clinic.jpg')}
  ></Image>
)

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
    paddingHorizontal: 30,
  },
  mainTitle: {
    fontSize: 38,
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 15,
  },
  submainTitle: {
    textAlign: 'center',
    fontSize: 23,
    paddingVertical: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 15,
  },
  address:{
    fontSize: 17,
    textAlign: 'center',
   
  },
  image:{
    width: 300,
    height: 270,
    borderRadius: 20,
  }
})