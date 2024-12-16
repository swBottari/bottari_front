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
  default: '',
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
