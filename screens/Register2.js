import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Button } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { RegisterUser } from '../redux/Reducer/UserReducer'
import { PublicRequest } from '../RequestMethod'
const Register2 = ({route}) => {


  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.wrapper}>
        <Text style={styles.RegisterName}>LOGIN CREDENTIALS</Text>
        <LoginCredentials route={route}/>
      </View>
    </SafeAreaView>
  )
}

export default Register2


const LoginCredentials = ({ route }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [confirmpass, setconfirmpass] = useState()
  const [ShowPass, setShowPass] = useState(false)
  const [Loading, setLoading] = useState(false);
  const [Omited, setOmited] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const IntervalButton = setInterval(() => {
      setOmited(false)
    }, 1000)
    return () => clearInterval(IntervalButton)
  }, [Omited])

  const HandleButtonRegister = async () => {
    setLoading(true)
    if (username && password && confirmpass) {
      if (password === confirmpass) {
        try {
          const res = await PublicRequest.post('auth', {
            firstname: route.params.firstname,
            middlename: route.params.middlename,
            lastname: route.params.lastname,
            username,
            password,
            birthday: route.params.birthday,
            img: 'https://firebasestorage.googleapis.com/v0/b/letterme-eb1d3.appspot.com/o/files%2Fuser.jpg?alt=media&token=b4b95e14-cad5-494f-b6c6-8e9c5f419c5a',
            sex: route.params.sex,
            address: route.params.Address,
            occupation: route.params.Occupation,
            nearestKin: route.params.NearestKin,
            relationship: route.params.Relationship,
            occupation2: route.params.Occupation2,
          })
          setLoading(false)
          dispatch(RegisterUser(res.data))
        } catch (error) {
          setLoading(false)
           setOmited(true)
          console.log(error)
        }
      } else {
        setLoading(false)
         setOmited(true)
        console.log('Password does not match')
      }
    } else {
      setLoading(false)
      setOmited(true);
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
          color={Omited ?  '#EC5442' : "#03989E"}
          buttonStyle={styles.RegisterButton}
          onPress={HandleButtonRegister}
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
  RegisterName: {
    paddingBottom: 15,
    color: 'black',
    fontSize: 32,
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
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
    zIndex: 30,
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
  RegisterButton: {
    fontSize: 16,
    width: 200,
    borderRadius: 20,
    marginTop: 10,
  },
})

