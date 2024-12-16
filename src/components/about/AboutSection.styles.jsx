import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Tab = styled.button`
  padding: 12px 24px;
  background-color: ${props => (props.active ? '#ff7043' : '#ffffff')};
  color: ${props => (props.active ? '#ffffff' : '#000000')};
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContentArea = styled.div`
  padding: 20px;
  min-height: 50vh;
  border: 2px solid #000000;
  border-radius: 10px;
`;
