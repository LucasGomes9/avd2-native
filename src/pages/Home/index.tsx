import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

import { Container, Title, Description } from './styles'
import Watering from '../../assets/watering.png'
import { ButtonIcon } from '../../components/ButtonIcon';

export function Home() {
  const navigation = useNavigation()

  function handleChangePage() {
    navigation.navigate('GetUserName')
  }

  return (
    <Container>
      <Title>
        Gerencie {`\n`}
        suas plantas de {`\n`}
        forma fácil {`\n`}
      </Title>

      <Image 
        source={Watering}
      />

      <Description>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar {'\n'}
      </Description>

      <ButtonIcon
        onPress={handleChangePage}
      />

    </Container>
  );
}