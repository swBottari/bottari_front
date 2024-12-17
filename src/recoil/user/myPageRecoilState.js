import { atom } from 'recoil';

export const myPageRecoilState = atom({
  key: 'myPageRecoilState',
  default: '',
});

export const deliveryRecoilState = atom({
  key: 'deliveryRecoilState',
  default: '',
});

export const inquiryListRecoilState = atom({
  key: 'inquiryListRecoilState',
  default: {
    inquiryList: [
      {
        title: '해외 배송 예약은 어떻게 하나요?',
        content: '예약을 들어가 개인/기업을 선택하신 후 해외를 선택하시면 됩니다.',
        inquiryId: 1,
        answerStatus: true,
      },
      {
        title: '규정 및 요금은 어떻게 확인하나요?',
        content: '상단의 네비게이션 바에서 안내를 선택하시면 이동할 수 있습니다.',
        inquiryId: 2,
        answerStatus: true,
      },
    ],
    pageInfo: {
      totalPages: 1,
      totalElements: 2,
      currentPage: 0,
    },
  },
});

export const inquiryRecoilState = atom({
  key: 'inquiryRecoilState',
  default: '',
});

export const checkRecoilState = atom({
  key: 'checkRecoilState',
  default: '예약',
});

export const inquiryPageState = atom({
  key: 'inquiryPageState',
  default: 'list',
});
