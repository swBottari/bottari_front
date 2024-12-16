import React from 'react';
import * as S from './Login.styles';
import LoginInputSection from '../../components/login/LoginInputSection';

function Login() {
  return (
    <S.Container>
      <S.PageTitle>로그인</S.PageTitle>
      <LoginInputSection />
    </S.Container>
  );
}

export default Login;
