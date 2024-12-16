import React from 'react';
import * as S from './LoginInputSection.styles';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/BottariLogo.svg';

function LoginInputSection() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <S.PageContainer>
      {/* 왼쪽 로그인 폼 섹션 */}
      <S.LeftSection>
        <S.Title>로그인</S.Title>
        <S.InputWrapper>
          <S.Input type="text" placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
          <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
          <S.FindAccountText>아이디/비밀번호 찾기</S.FindAccountText>
        </S.InputWrapper>
      </S.LeftSection>

      {/* 중앙 구분선 */}
      <S.Divider />

      {/* 오른쪽 섹션 */}
      <S.RightSection>
        <S.Logo src={logoImage} alt="Bottari Logo" />
        <S.WelcomeMessage>보따리에 오신걸 환영합니다!</S.WelcomeMessage>
        <S.SignupButton onClick={handleSignUp}>회원가입</S.SignupButton>
      </S.RightSection>
    </S.PageContainer>
  );
}

export default LoginInputSection;
