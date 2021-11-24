import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Title, Description, Input } from './styles'
import colors from '../../global/styles/colors';
import { Button } from '../../components/Button';

export function GetUserName() {
  const [ name, setName ] = useState('')
  const navigation = useNavigation()

 async function handleAddName() {
    if (name.trim().length <= 2 || name == "") {
      alert("Por favor, digite o seu nome para continuar");
      return;
    }else{
      try {
        await AsyncStorage.setItem("userName", name)
        navigation.navigate('Confirm')

      } catch (error) {
        alert("Houve um erro ao salvar teu nome, tente novamente!");
      }

    }

  }

  return (
    <Container>

      <Title>
        😀
      </Title>

      <Description>
        Como podemos {'\n'}
        chamar você?
      </Description>

      <Input 
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Digite um nome"
        style={{ borderBottomColor: colors.gray, borderBottomWidth: 1 }}
      />

      <Button 
        title="Confirmar"
        onPress={() => {
          handleAddName()
        }}
        activeOpacity={0.5}
      />

    </Container>
  );
}