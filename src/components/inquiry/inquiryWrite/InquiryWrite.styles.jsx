import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f0e8;
  border-radius: 8px;
`;

export const Title = styled.h2`
  background-color: #6d5d4b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  width: 100px;
  background-color: #d3d3d3;
  padding: 10px;
  border-radius: 4px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  flex: 1;
  height: 200px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${props =>
    props.variant === 'cancel' &&
    `
    background-color: #ffd7ba;
    &:hover {
      background-color: #ffb088;
    }
  `}

  ${props =>
    props.variant === 'submit' &&
    `
    background-color: #ff6b1e;
    color: white;
    &:hover {
      background-color: #ff5500;
    }
  `}
`;
