import React from 'react';
import * as S from './LoginInputSection.styles';
import { useNavigate } from 'react-router-dom';

function LoginInputSection() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Input type="text" placeholder="아이디" />
        <S.Input type="password" placeholder="비밀번호" />
        <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
        <S.FindAccountText>아이디/비밀번호 찾기</S.FindAccountText>
      </S.InputWrapper>
      <S.SignupButton onClick={handleSignUp}>회원가입</S.SignupButton>
    </S.Container>
  );
}

export default LoginInputSection;
