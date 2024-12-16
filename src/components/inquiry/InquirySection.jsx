import React from 'react';
import * as S from './InquirySection.styles';
import { useRecoilValue } from 'recoil';
import { inquiryPageState } from '../../recoil/user/myPageRecoilState';
import InquiryWrite from './inquiryWrite/InquiryWrite';
import InquiryList from './inquiryList/InquiryList';

function InquirySection() {
  const inquiryValue = useRecoilValue(inquiryPageState);

  return <S.Container>{inquiryValue == 'list' ? <InquiryList /> : <InquiryWrite />}</S.Container>;
}

export default InquirySection;
