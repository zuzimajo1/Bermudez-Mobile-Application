import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import { Button } from '@rneui/themed'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser } from '../../redux/Reducer/UserReducer'
import { LogoutAppointment } from '../../redux/Reducer/Appointment'

export default function AccountDataContent({ navigation }) {
  const [Visible, setVisible] = useState(false)
  const { firstname, middlename, lastname, img } = useSelector(
    (state) => state?.user?.user
  )
  const dispatch = useDispatch()
  return (
    <View>
      <UserDataContent
        firstname={firstname}
        middlename={middlename}
        lastname={lastname}
        img={img}
        setVisible={setVisible}
        dispatch={dispatch}
      />
    </View>
  )
}

const UserDataContent = (props) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingTop: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <View>
        <Image
          source={{ uri: props.img }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 2,
            borderColor: '#3498DB',
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '700' }}>
          {props?.firstname} {props?.middlename} {props?.lastname}
        </Text>
      </View>
      <View style={{marginTop: 130}}>
        <Button
          title="Logout"
          color="#03989E"
          buttonStyle={{
            fontSize: 16,
            width: 150,
            borderRadius: 20,
            marginTop: 40,
          }}
          onPress={()=>{
            props.dispatch(LogoutUser())
            props.dispatch(LogoutAppointment())
          }}
        />
      </View>
    </View>
  )
}
