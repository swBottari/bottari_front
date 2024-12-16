import React, { useState } from 'react';
import * as S from './SignUpInputSection.styles';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/BottariLogo.svg';

function SignUpInputSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    address: '',
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.id ||
      !formData.name ||
      !formData.password ||
      !formData.passwordConfirm ||
      !formData.phoneNumber ||
      !formData.address ||
      !formData.email
    ) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    alert('회원가입이 완료되었습니다.');
    navigate('/');
  };

  const handleReset = () => {
    setFormData({
      id: '',
      name: '',
      password: '',
      passwordConfirm: '',
      phoneNumber: '',
      address: '',
      email: '',
    });
  };

  return (
    <S.FormContainer>
      <S.LeftSection>
        <S.Form>
          <S.InputGroup>
            <S.Label>아이디</S.Label>
            <S.Input type="text" name="id" value={formData.id} onChange={handleChange} />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>이름</S.Label>
            <S.Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>비밀번호 확인</S.Label>
            <S.Input
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>휴대폰번호</S.Label>
            <S.Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>주소</S.Label>
            <S.Input type="text" name="address" value={formData.address} onChange={handleChange} />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>이메일</S.Label>
            <S.Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </S.InputGroup>

          <S.ButtonGroup>
            <S.ResetButton type="button" onClick={handleReset}>
              다시 쓰기
            </S.ResetButton>
            <S.SubmitButton type="submit" onClick={handleSubmit}>
              회원가입
            </S.SubmitButton>
          </S.ButtonGroup>
        </S.Form>
      </S.LeftSection>
      {/* 오른쪽 섹션 */}
      <S.RightSection>
        <S.LogoImage src={logoImage} alt="Bottari Logo" />
      </S.RightSection>
    </S.FormContainer>
  );
}

export default SignUpInputSection;
