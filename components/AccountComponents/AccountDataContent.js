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
// import { UserChangePicture } from '../../redux/Reducers/UserReducer'
// import { UserLogout } from '../../redux/Reducers/UserReducer'
// import { DeleteCocktail } from '../../redux/Reducers/CocktailReducer'
// import { ChangeImageUser } from '../../redux/apiCalls'
// import { LogoutOrder } from '../../redux/Reducers/DeleteOrderReducer'

export default function AccountDataContent({ navigation }) {
  const [Visible, setVisible] = useState(false)
  const { firstname, middlename, lastname, img } = useSelector((state)=> state?.user?.user);


  // const User = useSelector((state) => state.user?.userContainer);
  // const {img, firstname, lastname, _id} = User;
  
  const dispatch = useDispatch()
  return (
    <View>
      <UserDataContent
        // UserImage={img}
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
            // UserChangePicture={UserChangePicture}
            // navigation={navigation}
            // userID={_id}
          />
        </Modal>
      )}
    </View>
  )
}

const UserDataContent = (props) => {
    // const deleteOrder = useSelector(
    //   (state) => state.deleteOrder.deleteOrderContainer
    // )
    // const cartOrder = useSelector((state)=> state.cart.cart)
    // const orders = useSelector(state=>state.order.orderContainer);
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
            // source={require('../../assets/images/Clinic.jpg')}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/letterme-eb1d3.appspot.com/o/files%2F1da795eddde85d474659c21843564ea3.jpg?alt=media&token=bf1dfeaf-b1bd-474f-aac4-53a33eb51c99',
            }}
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

  const ImageCameraLaunch = async () => {
    try {
      const grantedcamera = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'Allow CocktailShop to take pictures and record video?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      )

      if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED) {
        var options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        }

        launchCamera(options, (res) => {

          if (res.didCancel) {
            console.log('User cancelled image picker')
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error)
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton)
          } else {
            // console.log('response', JSON.stringify(res))
            // ChangeImageUser(props.dispatch, {
            //   img: res.assets[0].uri
            // },props.userID);
            // setVisible(false)
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const ImageGalleryLaunch = async () => {
    try {
      const grantedstorage = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Gallery Permission',
          message:
            'Allow CocktailShop to access photos, media, and files on your device?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      )

      if (grantedstorage === PermissionsAndroid.RESULTS.GRANTED) {
        var options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        }

        launchImageLibrary(options, (res) => {

          if (res.didCancel) {
            console.log('User cancelled image picker')
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error)
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton)
          } else {
            // console.log('response', JSON.stringify(res))
            //  ChangeImageUser(
            //    props.dispatch,
            //    {
            //      img: res.assets[0].uri,
            //    },
            //    props.userID
            //  )
            // setVisible(false)
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ChangeSelectionContent
        setVisible={setVisible}
        ImageGalleryLaunch={ImageGalleryLaunch}
        ImageCameraLaunch={ImageCameraLaunch}
        // navigation={props.navigation}
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
          height: 200,
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
              // onPress={props.ImageCameraLaunch}
            >
             
              <Ionicons name="camera" size={28} />
              <Text style={{ marginLeft: 16, fontSize: 17, fontWeight: '500' }}>
                Use Camera to Change
              </Text>
            </TouchableOpacity>
          </View>
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
              // onPress={props.ImageGalleryLaunch}
            >
           
              <Ionicons name="image" size={28} />
              <Text style={{ marginLeft: 16, fontSize: 17, fontWeight: '500' }}>
                Select Image from Gallery to Change
              </Text>
            </TouchableOpacity>
          </View>
          
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
              onPress={()=> props.dispatch(LogoutUser())}


              // onPress={() => {
              //   props.dispatch(UserLogout());
              //   props.dispatch(DeleteCocktail());
              //   props.dispatch(LogoutOrder());
              // }}
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
