import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #8b4513;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const FindAccountText = styled.p`
  color: #666;
  text-align: left;
  font-size: 14px;
  margin: 8px 0;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #8b4513;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`;
