import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  background-color: rgba(102, 54, 20, 0.1);
  border-radius: 10px;
  width: 100%;
`;

export const Button = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Icon = styled.span`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const ButtonText = styled.span`
  font-size: 14px;
`;

export const DateButton = styled(Button)`
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  .react-datepicker-wrapper {
    width: auto;
  }

  .react-datepicker__input-container input {
    width: 100px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
