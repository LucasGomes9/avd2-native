import styled from 'styled-components/native'
import colors from '../../global/styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  font-family: 'Rajdhani_700Bold';
  color: ${colors.heading};
`

export const Description = styled.Text`
  font-size: 16px;
  font-family: 'Inter_400Regular';
  text-align: center;
  color: ${colors.heading};
  margin: 32px 0;
`