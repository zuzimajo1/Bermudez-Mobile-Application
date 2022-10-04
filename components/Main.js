import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Account, Appointment, Home, Info, List, ListAdmin } from '../screens'
import { useSelector } from 'react-redux'
const Tab = createBottomTabNavigator()

const Main = () => {
  // const [Admin, setAdmin] = useState(false);
  const isAdmin = useSelector((state)=> state?.user?.user?.isAdmin);
  if (isAdmin) {
    return <MainTabAdmin Tab={Tab} />
  }

  return <MainTabUser Tab={Tab} />
}

export default Main

const MainTabAdmin = ({Tab}) => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, tabBarActiveTintColor: '#38B6FF' }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="home"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
  
    <Tab.Screen
      name="List"
      component={ListAdmin}
      options={{
        tabBarLabel: 'List',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="list"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Info"
      component={Info}
      options={{
        tabBarLabel: 'Info',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="information-circle"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="person"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
  </Tab.Navigator>
)

const MainTabUser = ({Tab}) => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, tabBarActiveTintColor: '#38B6FF' }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="home"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Appointment"
      component={Appointment}
      options={{
        tabBarLabel: 'Appointment',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="calendar"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="List"
      component={List}
      options={{
        tabBarLabel: 'List',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="list"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Info"
      component={Info}
      options={{
        tabBarLabel: 'Info',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="information-circle"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            size={size}
            name="person"
            style={{ marginBottom: 1, color: color }}
          />
        ),
      }}
    />
  </Tab.Navigator>
)

const styles = StyleSheet.create({})
