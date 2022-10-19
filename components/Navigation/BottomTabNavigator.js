
import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import Home from '../Screen/Home';
import Cuentas from '../Screen/Cuentas';
import Movimientos from '../Screen/Movimientos'
import Register from '../Screen/Register';


const principalColor = '#311C76'
const subColor = '#9E9E9E'

const styles = StyleSheet.create(
  {
    IconStyle: {
      fontSize: 22,
      color: `white`,
      fontWeight: `bold`
    },
    ocultar: {
      display: 'none'
    }
  }
)

const Tab = createBottomTabNavigator()

export default function NavigationBottomStack() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBarOptions={{
        activeTintColor: "white",
        activeBackgroundColor: `${subColor}`,
        inactiveTintColor: "#FFF",
        inactiveBackgroundColor: `${principalColor}`
      }}

    >
      <Tab.Screen
        style={{ color: 'black' }}
        name='Home'
        component={Home}
        options={{

          title: 'Inicio', tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' style={styles.IconStyle} color={color} size={size}></Ionicons>
          )

        }}
      />

      <Tab.Screen
        name='Cuentas'
        component={Cuentas}
        options={{
          title: 'Tranferir', tabBarIcon: ({ color, size }) => (
            <Ionicons name='swap-horizontal' style={styles.IconStyle} color={color} size={size}></Ionicons>
          )
        }}

      />

      <Tab.Screen name='Movimiento'
        component={Movimientos}
        options={{
          title: 'Movimientos', tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-rocket' style={styles.IconStyle} color={color} size={size}></Ionicons>
          )
        }}
      />

      <Tab.Screen
        name='Register'
        component={Register}
        options={{
          tabBarStyle: { display: 'none' },
          title: 'Register', tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-rocket' style={styles.IconStyle} color={color} size={size}></Ionicons>
          )
        }}
      />

    </Tab.Navigator>
  )
}