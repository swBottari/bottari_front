import React, { useState } from 'react';
import * as S from './LoginInputSection.styles';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/BottariLogo.svg';
import { useUserHook } from '../../api/user/user';

function LoginInputSection() {
  const navigate = useNavigate();
  const { loginUser } = useUserHook();

  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    localStorage.setItem('userName', '보따리');
    window.dispatchEvent(new Event('storageChange'));
    alert('로그인 되었습니다.');
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
          <S.Input
            type="text"
            name="id"
            placeholder="아이디"
            value={formData.id}
            onChange={handleInputChange}
          />
          <S.Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleInputChange}
          />
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
