import styled from 'styled-components/native'
import colors from '../../global/styles/colors'

export const Container = styled.TouchableOpacity`
  height: 56px;
  background-color: ${colors.green};
  border-radius: 8px;
  align-items: center;
  width: 56px;
  justify-content: center;
  width: 60%;
  margin: 32px 0;
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.white};
`