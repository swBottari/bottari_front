import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
`;

export const Table = styled.div`
  width: 100%;
  border: 1px solid #ddd;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1.2fr 1fr 1fr 1fr 1fr 0.8fr 1fr;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

export const TableHeaderCell = styled.div`
  padding: 12px 8px;
  text-align: center;
  font-weight: bold;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

export const TableBody = styled.div`
  min-height: 200px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1.2fr 1fr 1fr 1fr 1fr 0.8fr 1fr;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.div`
  padding: 12px 8px;
  text-align: center;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;
