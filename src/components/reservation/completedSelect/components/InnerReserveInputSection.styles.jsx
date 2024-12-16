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
  background-color: white;
  width: ${props => props.width || '100%'};
`;

export const AddressInput = styled(Input)`
  width: 98%;
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
  width: 70%;
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
  flex-wrap: wrap; /* 내용들이 공간에 맞게 줄바꿈 될 수 있도록 함 */
  gap: 10px; /* 각 요소 사이의 간격 추가 */
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap; /* 항목들이 화면 너비에 맞게 줄바꿈 되도록 함 */
  margin-bottom: 10px; /* 아래 여백 추가 */
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  background-color: white;
  border-radius: 4px;
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

export const DocButton = styled.button`
  background-color: #ffdd6e;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  position: relative; /* 정렬을 위한 기준 */
  margin: 10px 10px; /* 외부 여백 (아래와 옆 간격 추가) */
  align-self: flex-end;
`;

export const NoteButton = styled.button`
  background-color: #ffdd6e;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  position: relative; /* 정렬을 위한 기준 */
  margin: 10px 10px; /* 외부 여백 (아래와 옆 간격 추가) */
  align-self: flex-end;
`;

//필요서류등록모달
// 모달 오버레이
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 컨텐츠
export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  text-align: center;
`;

export const FileInput = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
`;
