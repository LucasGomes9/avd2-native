import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, Description } from './styles'
import { Button } from '../../components/Button';

export function Confirm() {
  const [ name, setName ] = useState('')

  const navigation = useNavigation()
  
  function handleChangePage() {
    navigation.navigate('MainScreen')
  }

  return (
    <Container>

      <Title style={{ fontSize: 80 }}>
        😁
      </Title>

      <Title>
        Prontinho
      </Title>

      <Description>
        Agora vamos começar a cuidar das suas {'\n'}
        plantinhas com muito cuidado.
      </Description>

      <Button 
        title="Começar"
        onPress={handleChangePage}
      />
    </Container>
  );
}