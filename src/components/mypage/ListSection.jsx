import React from 'react';
import * as S from './ListSection.styles';
import { useRecoilState } from 'recoil';
import { checkRecoilState } from '../../recoil/user/myPageRecoilState';

function ListSection() {
  const [selectedMenu, setSelectedMenu] = useRecoilState(checkRecoilState);
  const tableHeaders = [
    '구분',
    'No.',
    '송장번호',
    '접수일',
    '방문예정일',
    '진행상태',
    '받은실분',
    '취소',
    '비고',
  ];

  const mockData = [
    {
      구분: '퀵',
      'No.': 1,
      송장번호: 'TRK4824',
      접수일: '2024-12-01',
      방문예정일: '2024-12-16',
      진행상태: '완료',
      받은실분: 5,
      취소: 'No',
      비고: '확인 필요',
    },
    {
      구분: '예약',
      'No.': 2,
      송장번호: 'TRK4046',
      접수일: '2024-12-14',
      방문예정일: '2024-12-21',
      진행상태: '대기',
      받은실분: 94,
      취소: 'No',
      비고: '연락 요망',
    },
    {
      구분: '반품',
      'No.': 3,
      송장번호: 'TRK7892',
      접수일: '2024-12-10',
      방문예정일: '2024-12-18',
      진행상태: '처리중',
      받은실분: 23,
      취소: 'No',
      비고: '포장 상태 확인',
    },
    {
      구분: '퀵',
      'No.': 4,
      송장번호: 'TRK5678',
      접수일: '2024-12-15',
      방문예정일: '2024-12-17',
      진행상태: '배송중',
      받은실분: 12,
      취소: 'No',
      비고: '',
    },
    {
      구분: '예약',
      'No.': 5,
      송장번호: 'TRK9012',
      접수일: '2024-12-16',
      방문예정일: '2024-12-23',
      진행상태: '대기',
      받은실분: 78,
      취소: 'No',
      비고: '특별 요청 사항 있음',
    },
    {
      구분: '반품',
      'No.': 6,
      송장번호: 'TRK3456',
      접수일: '2024-12-12',
      방문예정일: '2024-12-19',
      진행상태: '승인대기',
      받은실분: 45,
      취소: 'No',
      비고: '제품 상태 확인 필요',
    },
    {
      구분: '퀵',
      'No.': 7,
      송장번호: 'TRK7890',
      접수일: '2024-12-17',
      방문예정일: '2024-12-18',
      진행상태: '대기',
      받은실분: 8,
      취소: 'No',
      비고: '긴급 배송',
    },
    {
      구분: '예약',
      'No.': 8,
      송장번호: 'TRK2345',
      접수일: '2024-12-18',
      방문예정일: '2024-12-25',
      진행상태: '확인중',
      받은실분: 56,
      취소: 'No',
      비고: '고객 요청사항 있음',
    },
    {
      구분: '반품',
      'No.': 9,
      송장번호: 'TRK6789',
      접수일: '2024-12-13',
      방문예정일: '2024-12-20',
      진행상태: '반품완료',
      받은실분: 34,
      취소: 'No',
      비고: '환불 처리 중',
    },
    {
      구분: '퀵',
      'No.': 10,
      송장번호: 'TRK0123',
      접수일: '2024-12-19',
      방문예정일: '2024-12-20',
      진행상태: '접수',
      받은실분: 17,
      취소: 'No',
      비고: '당일 배송',
    },
  ];

  const getTitle = () => {
    switch (selectedMenu) {
      case '예약':
        return '예약내역';
      case '반품':
        return '반품내역';
      case '퀵':
        return '퀵내역';
      default:
        return '예약내역';
    }
  };

  const filteredData = mockData.filter(item => item.구분 === selectedMenu);

  return (
    <S.Container>
      <S.Title>{getTitle()}</S.Title>
      <S.Table>
        <S.TableHeader>
          {tableHeaders.map((header, index) => (
            <S.TableHeaderCell key={index}>{header}</S.TableHeaderCell>
          ))}
        </S.TableHeader>
        <S.TableBody>
          {filteredData.map((row, rowIndex) => (
            <S.TableRow key={rowIndex}>
              {tableHeaders.map((header, cellIndex) => (
                <S.TableCell key={cellIndex}>{row[header]}</S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.Container>
  );
}

export default ListSection;
