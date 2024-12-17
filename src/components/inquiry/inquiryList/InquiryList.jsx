import React from 'react';
import * as S from './InquiryList.styles';
import WriteButton from '../components/WriteButton';
import { inquiryListRecoilState } from '../../../recoil/user/myPageRecoilState';
import { useRecoilValue } from 'recoil';

function InquiryList() {
  const inquiryData = useRecoilValue(inquiryListRecoilState);

  // const inquiryData = {
  //   inquiryList: [
  //     {
  //       title: '해외 배송 예약은 어떻게 하나요?',
  //       content: '예약을 들어가 개인/기업을 선택하신 후 해외를 선택하시면 됩니다.',
  //       inquiryId: 1,
  //       answerStatus: true,
  //     },
  //     {
  //       title: '규정 및 요금은 어떻게 확인하나요?',
  //       content: '상단의 네비게이션 바에서 안내를 선택하시면 이동할 수 있습니다.',
  //       inquiryId: 2,
  //       answerStatus: true,
  //     },
  //   ],
  //   pageInfo: {
  //     totalPages: 1,
  //     totalElements: 2,
  //     currentPage: 0,
  //   },
  // };
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
