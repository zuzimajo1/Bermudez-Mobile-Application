import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
} from 'react-native'
import React, { useState } from 'react'
import { Button } from '@rneui/themed'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../redux/Reducer/UserReducer'
import { PublicRequest } from '../RequestMethod'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.wrapper}>
        <Text style={styles.ClinicName}>bermudez clinic</Text>
        <Text style={styles.SchedText}>Schedule an Appointment</Text>
        <Logo />
        <LoginForm navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}

const Logo = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image
        style={styles.image}
        source={require('../assets/images/doctor.png')}
      />
    </View>
  )
}

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [ShowPass, setShowPass] = useState(false)
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const HandleButtonLogin = async () => {
    setLoading(true)
    if (username && password) {
      try {
        const res = await PublicRequest.post('auth/login', {
          username,
          password,
        })
        setLoading(false);
        dispatch(LoginUser(res.data))
      } catch (err) {
         setLoading(false)
        console.log("Please don't omit any details")
      }
    } else {
         setLoading(false)
      console.log("Please don't omit any details")
    }
  }

  return (
    <View style={styles.formMain}>
      <Text style={styles.formText}>username:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter username here"
        onChangeText={setUsername}
        autoCorrect={false}
      />
      <Text style={styles.formText}>password:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter password here"
        secureTextEntry={ShowPass ? false : true}
        onChangeText={setPassword}
      />
      <View style={styles.BouncyCheckboxContainer}>
        <BouncyCheckbox
          size={18}
          fillColor="#5CE1E6"
          unfillColor="#FFF"
          onPress={() => setShowPass(!ShowPass)}
        />
        <Text style={styles.normalText}>Show Password</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          loading={Loading ? true : false}
          title="Login"
          color="#008037"
          buttonStyle={styles.LoginButton}
          onPress={HandleButtonLogin}
        />
        <Button
          title="Create Account"
          color="#03989E"
          buttonStyle={styles.RegisterButton}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  )
}

export default Login

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
  ClinicName: {
    color: 'black',
    fontSize: 36,
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  SchedText: {
    textAlign: 'center',
    fontSize: 16,
  },
  logoWrapper: {
    marginTop: 8,
    backgroundColor: '#FFF',
    width: 220,
    height: 220,
    borderRadius: 110,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    backgroundColor: 'transparent',
  },
  formMain: {
    width: '100%',
    paddingVertical: 6,
  },
  formText: {
    textTransform: 'capitalize',
    color: 'black',
    fontSize: 16,
    paddingTop: 6,
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
  BouncyCheckboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 6,
  },
  normalText: {
    color: 'white',
    fontSize: 13,
  },
  buttonContainer: {
    marginTop: 8,
    alignItems: 'center',
    width: '100%',
  },
  LoginButton: {
    fontSize: 16,
    width: 200,
    borderRadius: 20,
  },
  RegisterButton: {
    fontSize: 16,
    width: 200,
    borderRadius: 20,
    marginTop: 10,
  },
})
