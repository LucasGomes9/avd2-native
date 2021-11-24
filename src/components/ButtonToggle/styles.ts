import styled from 'styled-components/native'
import colors from '../../global/styles/colors'

export const Container = styled.TouchableOpacity`
  height: 56px;
  background-color: #4fbe79;
  width:80px
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 10px
  margin: 32px 0;
  &:checked {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.white};
`