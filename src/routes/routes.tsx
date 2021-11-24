import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home'
import { GetUserName } from '../pages/GetUserName'
import { Confirm } from '../pages/Confirm'
import { MainScreen } from '../pages/MainScreen'

const { Navigator, Screen } = createStackNavigator()

export function TempRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />

      <Screen 
        name="GetUserName"
        component={GetUserName}
      />

      <Screen 
        name="Confirm"
        component={Confirm}
      />
      
      <Screen 
        name="MainScreen"
        component={MainScreen}
      />
    </Navigator>
  )
}