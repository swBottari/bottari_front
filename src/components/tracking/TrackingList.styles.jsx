import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 70%;
`;

export const TableSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  background-color: rgba(102, 54, 20, 0.4);
  border-radius: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #8b4513;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  //&:hover {
  //  background-color: #f5f5f5;
  //}
`;

export const DateColumn = styled(Td)`
  width: 150px;
`;

export const LocationColumn = styled(Td)`
  width: 120px;
`;

export const StatusColumn = styled(Td)`
  flex-grow: 1;
`;
