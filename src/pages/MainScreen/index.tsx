import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonToggle } from '../../components/ButtonToggle';


import { UserImage, Container, Header, Title, Content, TextContainer, TextDescription, ToggleContent} from './styles'

export function MainScreen() {
  const [ name, setName ] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    async function getName(){
      let userName;
      try {
        userName = await AsyncStorage.getItem("userName")
        if(userName !== null) {
          setName(userName)
        }
      } catch (error) {
        alert("Erro ao ler seu nome, tente novamente")
        getName()
      }
    }    
    getName()
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          Olá {name}, {'\n'}Como você está?
        </Title>
        
        <UserImage 
          source={{uri: 'https://avatars.githubusercontent.com/u/26194427?s=400&u=a60f68d59ca10b0284dcccea4f8f632333a2d6f3&v=4' }} 
        />
      </Header>

      <Content>
        <TextContainer>        
          <TextDescription style={{ fontWeight: 'bold' }}>Em qual ambiente</TextDescription>
          <TextDescription>você quer colocar sua planta?</TextDescription>
        </TextContainer>

        <ToggleContent>
          <ButtonToggle 
          title="Sala"
          onPress={()=> alert("Sala selecionada")}

           />
          
          <ButtonToggle 
          title="Quarto"
          onPress={()=> alert("Quarto Selecionado")}

          />
          
          <ButtonToggle 
          title="Cozinha"
          onPress={()=> alert("Cozinha Selecionada")}

          />

          <ButtonToggle 
          title="Banheiro"
          onPress={()=> alert("Banheiro Selecionado")}
          />

        </ToggleContent>



      </Content>
      
    </Container>
  );
}