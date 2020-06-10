import React from 'react';
// import { toast } from 'react-toastify';

import { Container } from '../../styles/global';
import { Title } from './styled';

export default function Login() {
  return (
    <>
      <Container>
        <Title isRed={false}>
          Login
          <small>Santan</small>
        </Title>

        <small>Lorem ipsum dolor sit amet.</small>
      </Container>
    </>
  );
}
