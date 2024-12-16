import React from 'react';
import * as S from './Login.styles';
import LoginInputSection from '../../components/login/LoginInputSection';

function Login() {
  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <LoginInputSection />
    </S.Container>
  );
}

export default Login;
