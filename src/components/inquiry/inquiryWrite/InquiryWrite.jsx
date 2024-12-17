import React, { useState } from 'react';
import * as S from './InquiryWrite.styles';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { inquiryPageState, inquiryListRecoilState } from '../../../recoil/user/myPageRecoilState';

function InquiryWrite() {
  const setInquiryValue = useSetRecoilState(inquiryPageState);
  const [inquiryList, setInquiryList] = useRecoilState(inquiryListRecoilState);
  const [inquiryType, setInquiryType] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleGoBack = () => {
    setInquiryValue('list');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newInquiry = {
      title,
      content,
      inquiryId: inquiryList.inquiryList.length + 1,
      answerStatus: false,
    };

    setInquiryList(prevState => ({
      ...prevState,
      inquiryList: [...prevState.inquiryList, newInquiry],
      pageInfo: {
        ...prevState.pageInfo,
        totalElements: prevState.pageInfo.totalElements + 1,
      },
    }));

    setInquiryValue('list');
  };

  return (
    <S.Container>
      <S.Title>문의 작성</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Label>문의 유형</S.Label>
          <S.Input type="text" value={inquiryType} onChange={e => setInquiryType(e.target.value)} />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>제목</S.Label>
          <S.Input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>내용</S.Label>
          <S.TextArea value={content} onChange={e => setContent(e.target.value)} />
        </S.FormGroup>
        <S.ButtonGroup>
          <S.Button type="button" variant="cancel" onClick={handleGoBack}>
            돌아가기
          </S.Button>
          <S.Button type="submit" variant="submit">
            제출하기
          </S.Button>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  );
}

export default InquiryWrite;
