import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from '@rneui/themed'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux'
import { RegisterUser } from '../redux/Reducer/UserReducer'
import { PublicRequest } from '../RequestMethod'

const Register = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.wrapper}>
        <Text style={styles.RegisterName}>registration form</Text>
        <RegisterForm />
      </View>
    </SafeAreaView>
  )
}

const RegisterForm = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setlastname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmpass, setconfirmpass] = useState();
  const [ShowPass, setShowPass] = useState(false)
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();

 const HandleButtonRegister = async () => {
    setLoading(true)
   if (firstname && lastname && username && password && confirmpass) {
     if (password === confirmpass) {
       try {
         const res = await PublicRequest.post('auth/register', {
           firstname,
           lastname,
           username,
           password,
           img: 'data:image/jpeg;base64,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',
         })
         setLoading(false);
         dispatch(RegisterUser(res.data))
       } catch (error) {
         setLoading(false)
         console.log(error)
       }
     } else {
         setLoading(false)
       console.log('Password does not match')
     }
   } else {
     setLoading(false)
     console.log("Please don't omit any details")
   }
 }

  return (
    <View style={styles.formMain}>
      <Text style={styles.formText}>first name:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter first name here"
        onChangeText={setFirstname}
        autoCorrect={false}
      />
      <Text style={styles.formText}>last name:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter last name here"
        onChangeText={setlastname}
        autoCorrect={false}
      />
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
      <Text style={styles.formText}>confirm password:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter confirm password here"
        secureTextEntry={ShowPass ? false : true}
        onChangeText={setconfirmpass}
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
          title="Register"
          color="#03989E"
          buttonStyle={styles.RegisterButton}
          onPress={HandleButtonRegister}
        />
      </View>
    </View>
  )
}

export default Register

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
  RegisterName: {
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
    marginTop: 12,
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
