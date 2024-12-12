import { atom } from 'recoil';

export const searchQueryAtom = atom({
  key: 'searchQueryAtom',
  default: '',
});

export const reserveState = atom({
  key: 'reserveState',
  default: {
    userState: '',
    boundaryState: '',
  },
});
