import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { TouchableOpacityProps } from 'react-native'

import {
  ButtonContainer
} from './styles'

interface Props extends TouchableOpacityProps {
}

export function ButtonIcon({ ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      <Ionicons name="chevron-forward-outline" size={32} color="white" />
    </ButtonContainer>
  )
}