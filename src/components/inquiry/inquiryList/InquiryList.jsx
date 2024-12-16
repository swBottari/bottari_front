import React from 'react';
import * as S from './InquiryList.styles';
import WriteButton from '../components/WriteButton';

function InquiryList() {
  //const inquiryData = useRecoilValue(inquiryListRecoilState);

  const inquiryData = {
    inquiryList: [
      {
        title: '나야 테스트',
        content: '테스트',
        inquiryId: 1,
        answerStatus: true,
      },
      {
        title: '테스트입니다',
        content: '테스트트',
        inquiryId: 2,
        answerStatus: true,
      },
    ],
    pageInfo: {
      totalPages: 1,
      totalElements: 2,
      currentPage: 0,
    },
  };
  return (
    <S.MainWrapper>
      <S.Container>
        <S.Header>1:1 문의 내역</S.Header>
        <S.Content>
          {inquiryData.inquiryList &&
            inquiryData.inquiryList.map(inquiry => (
              <S.InquiryItem key={inquiry.inquiryId}>
                <S.Question>Q. {inquiry.title}</S.Question>
                {inquiry.answerStatus && <S.Answer>A. {inquiry.content}</S.Answer>}
              </S.InquiryItem>
            ))}
        </S.Content>
        {inquiryData.pageInfo && (
          <S.PageNumber>
            {Array.from({ length: inquiryData.pageInfo.totalPages }, (_, i) => i + 1).join(' ')}
          </S.PageNumber>
        )}
      </S.Container>
      <S.WriteSection>
        <WriteButton />
      </S.WriteSection>
    </S.MainWrapper>
  );
}

export default InquiryList;