import React from 'react';
import * as S from './TrackingList.styles';
import { useRecoilValue } from 'recoil';
import { searchQueryAtom } from '../../recoil/Items/itemsRecoilState';

// 목데이터 정의
const mockData = [
  {
    id: 1,
    list: [
      {
        id: 1,
        date: '2024-11-17 09:51',
        location: '배송센터',
        status: '고객님의 상품을 배송기사 인계하였습니다.',
      },
      {
        id: 2,
        date: '2024-11-18 08:10',
        location: '허브',
        status: '고객님의 상품이 허브에 도착하였습니다.',
      },
      {
        id: 3,
        date: '2024-11-19 07:20',
        location: '중구센터',
        status: '고객님의 상품이 배달지에 도착하였습니다.',
      },
      {
        id: 4,
        date: '2024-11-19 13:30',
        location: '동국대학교',
        status: '고객님의 상품이 배달 완료되었습니다.',
      },
    ],
  },
];

function TrackingList() {
  const searchValue = useRecoilValue(searchQueryAtom);

  const filteredData = mockData.find(item => item.id.toString() === searchValue);

  return (
    <S.Container>
      <div>listimg</div>
      <S.TableSection>
        <S.Table>
          <thead>
            <tr>
              <S.Th>날짜</S.Th>
              <S.Th>위치</S.Th>
              <S.Th>배송상태</S.Th>
            </tr>
          </thead>
          <tbody>
            {filteredData &&
              filteredData.list.map(item => (
                <S.Tr key={item.id}>
                  <S.DateColumn>{item.date}</S.DateColumn>
                  <S.LocationColumn>{item.location}</S.LocationColumn>
                  <S.StatusColumn>{item.status}</S.StatusColumn>
                </S.Tr>
              ))}
          </tbody>
        </S.Table>
      </S.TableSection>
    </S.Container>
  );
}

export default TrackingList;
