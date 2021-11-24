import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { TempRoutes } from './routes'

export function Routes() {
  return (
    <NavigationContainer>
      <TempRoutes />
    </NavigationContainer>
  )
}