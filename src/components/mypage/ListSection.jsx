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

  return (
    <S.Container>
      <S.Title>{getTitle()}</S.Title>
      <S.Table>
        <S.TableHeader>
          {tableHeaders.map((header, index) => (
            <S.TableHeaderCell key={index}>{header}</S.TableHeaderCell>
          ))}
        </S.TableHeader>
        <S.TableBody>{/* 데이터가 있을 경우 매핑하여 표시 */}</S.TableBody>
      </S.Table>
    </S.Container>
  );
}

export default ListSection;
