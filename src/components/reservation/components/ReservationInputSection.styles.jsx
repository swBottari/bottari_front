import { styled } from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5e6d3;
  border-radius: 8px;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.div`
  background-color: #5c3c23;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  align-items: center;
`;

export const Label = styled.label`
  min-width: 80px;
  &::after {
    content: ${props => (props.required ? '" *"' : '')};
    color: red;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${props => props.width || '100%'};
`;

export const AddressInput = styled(Input)`
  width: 100%;
  margin-top: 8px;
`;

export const SearchButton = styled.button`
  background-color: #5c3c23;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SubmitButton = styled.button`
  background-color: #ff6b01;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;
