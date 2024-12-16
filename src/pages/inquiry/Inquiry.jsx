import React from 'react';
import * as S from './Inquiry.styles';
import InquirySection from '../../components/inquiry/InquirySection';
import WriteButton from '../../components/inquiry/components/WriteButton';

function Inquiry() {
  return (
    <S.MainWrapper>
      <S.TopImg>
        <S.Title>고객 문의</S.Title>
      </S.TopImg>
      <S.InquirySection>
        <S.InquiryTitle>빠르고 정확하게 답변드리겠습니다.</S.InquiryTitle>
        <InquirySection />
      </S.InquirySection>
    </S.MainWrapper>
  );
}

export default Inquiry;
