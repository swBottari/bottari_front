import React from 'react';
import * as S from './InquiryWrite.styles';
import { useSetRecoilState } from 'recoil';
import { inquiryPageState } from '../../../recoil/user/myPageRecoilState';

function InquiryWrite() {
  const setInquiryValue = useSetRecoilState(inquiryPageState);
  const handleGoBack = () => {
    setInquiryValue('list');
  };

  const handleSubmit = () => {
    //d
  };

  return (
    <S.Container>
      <S.Title>문의 작성</S.Title>
      <S.Form>
        <S.FormGroup>
          <S.Label>문의 유형</S.Label>
          <S.Input type="text" />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>제목</S.Label>
          <S.Input type="text" />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>내용</S.Label>
          <S.TextArea />
        </S.FormGroup>
        <S.ButtonGroup>
          <S.Button type="button" variant="cancel" onClick={handleGoBack}>
            돌아가기
          </S.Button>
          <S.Button type="submit" variant="submit" onClick={handleSubmit}>
            제출하기
          </S.Button>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  );
}

export default InquiryWrite;
