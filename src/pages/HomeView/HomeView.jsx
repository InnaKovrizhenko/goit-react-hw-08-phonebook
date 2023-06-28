import React from 'react';
import { Container, Title } from './HomeView.styled';
import phoneWallpaper1 from './../../images/1.png';
export const HomeView = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <img src={phoneWallpaper1} alt="" width="100%" height="300" />
    </Container>
  );
};


