import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { PermissionsAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser } from '../../redux/Reducer/UserReducer'
import { LogoutAppointment } from '../../redux/Reducer/Appointment'


export default function AccountDataContent({ navigation }) {
  const [Visible, setVisible] = useState(false)
  const { firstname, middlename, lastname, img } = useSelector((state)=> state?.user?.user);


  
  const dispatch = useDispatch()
  return (
    <View>
      <UserDataContent
       
        firstname={firstname}
        middlename={middlename}
        lastname={lastname}
        img={img}
        setVisible={setVisible}
      />
      {Visible && (
        <Modal
          visible={Visible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setVisible(false)}
        >
          <ChangeSelection
            setVisible={setVisible}
            launchCamera={launchCamera}
            launchImageLibrary={launchImageLibrary}
            dispatch={dispatch}
           
          />
        </Modal>
      )}
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
        <TouchableOpacity onPress={() => props.setVisible(true)}>
          <Image
            source={{uri: props.img}}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 2,
              borderColor: '#3498DB',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: 17,
            fontWeight: '600',
            alignSelf: 'center',
          }}
        >
          {/* {props.firstname} {props.lastname} */}
        </Text>
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
    </View>
  )
}

const ChangeSelection = (props) => {
  const { setVisible, ImagePicker, launchImageLibrary, launchCamera } = props

  

  return (
    <>
      <ChangeSelectionContent
        setVisible={setVisible}
        dispatch={props.dispatch}
      />
    </>
  )
}

const ChangeSelectionContent = (props) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <View
        style={{
          position: 'relative',
          width: '100%',
          height: 80,
          backgroundColor: 'white',
          zIndex: 99,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'baseline',
            width: '100%',
            height: '100%',
          }}
        >  
          <View
            style={{
              width: '100%',
              paddingHorizontal: 16,
              marginVertical: 4,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
              onPress={()=> {
                props.dispatch(LogoutUser())
                props.dispatch(LogoutAppointment())
              }}
            >
              <Ionicons name="log-out" size={28} />
             
              <Text style={{ marginLeft: 16, fontSize: 17, fontWeight: '500' }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: 'absolute', top: 6, right: 16 }}>
          <TouchableOpacity
           onPress={() => props.setVisible(false)}
          >
            <Ionicons name="close" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
