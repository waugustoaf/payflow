import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  margin: 28px 0 0;
`;

export const Header = styled.View`
  height: 56px;
  width: 100%;
  background-color: #8000ff;
  padding: 8px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  align-items: flex-end;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const CounterText = styled.Text`
  color: #444;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 56px;
  width: 56px;
  background-color: #8000ff;
  color: #fff;
  border-radius: 28px;
  margin-right: 16px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
