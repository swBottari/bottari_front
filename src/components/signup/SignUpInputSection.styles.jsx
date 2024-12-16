import { styled } from 'styled-components';

export const FormContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  width: 120px;
  font-size: 14px;
  color: #666;
  text-align: right;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #ff6b00;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const ResetButton = styled(Button)`
  background-color: #ff6b00;
  color: white;

  &:hover {
    background-color: #ff8533;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: #663300;
  color: white;

  &:hover {
    background-color: #804000;
  }
`;
