import React from 'react';
import * as S from './SignUp.styles';
import SingUpInputSection from '../../components/signup/SingUpInputSection';

function SignUp() {
  return (
    <S.Container>
      <S.Title>회윈정보 입력</S.Title>
      <SingUpInputSection />
    </S.Container>
  );
}

export default SignUp;
