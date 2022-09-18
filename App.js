/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store } from './redux/store';
import { Home, Login, Register } from './screens';
import { useSelector } from 'react-redux';


const App = ()=>{
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  }

  return(
    <Provider store={store}>
    <AppWrapper
    Stack={Stack}
    screenOptions={screenOptions}
    />
    </Provider>
   
  )
}



const AppWrapper = ({Stack, screenOptions}) => {
 const isSignedIn = useSelector((state) => state.user?.userLogin)

  return (
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
          >
            {isSignedIn ? (
              <>
                <Stack.Screen name="Home" component={Home} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PersistGate>
  )
};



export default App;
