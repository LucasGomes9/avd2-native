import styled from 'styled-components/native'
import colors from '../../global/styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  padding-left: 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 42px;
`

export const Title = styled.Text`
  font-size: 32px;
`
export const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-right: 20px;
`

export const Content = styled.View`
  width: 100%;
  padding: 25px;
`

export const TextDescription = styled.Text`
  font-size: 16px;
  font-family: 'Inter_400Regular';
`

export const TextContainer = styled.View`
  width: 100%;
`

export const ToggleContent = styled.View`
 display: flex
 flex-direction: row
 margin-horizontal: 10px
 justify-content: space-between
`

