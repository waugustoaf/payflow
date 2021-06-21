import React, { useState } from 'react';
import {
  AddButton,
  AddButtonText,
  Container,
  Content,
  CounterText,
  Footer,
  Header,
  Title,
} from './styles';

export const Home: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleAddCounter = () => {
    setCounter(previousValue => previousValue + 1);
  };

  return (
    <Container>
      <Header>
        <Title>Meu Primeiro App</Title>
      </Header>

      <Content>
        <CounterText>Contador</CounterText>
        <CounterText>{counter}</CounterText>
      </Content>

      <Footer>
        <AddButton onPress={handleAddCounter}>
          <AddButtonText>+</AddButtonText>
        </AddButton>
      </Footer>
    </Container>
  );
};
