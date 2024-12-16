import { styled } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/images/background.png');
  background-size: cover;
  background-position: center;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* 왼쪽 2칸, 오른쪽 1칸 비율 */
  justify-content: space-between;
  align-items: center;
  width: 90%;
  position: relative; /* ButtonGroup 위치 기준 */
  max-width: 800px; /* 폼의 최대 너비 */
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const LeftSection = styled.div`
  flex: 7; /* 왼쪽 비율 */
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RightSection = styled.div`
  flex: 4; /* 오른쪽 비율 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  gap: 10px; /* 레이블과 인풋 사이 간격 */
  margin-bottom: 10px; /* 각 입력 그룹 간의 간격 */
`;

export const Label = styled.label`
  width: 100px; /* 레이블 너비 고정 */
  text-align: right; /* 오른쪽 정렬 */
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  flex: 1; /* 나머지 공간을 채움 */
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
  justify-content: center; /* 수평 가운데 정렬 */
  grid-column: span 2; /* 버튼 그룹을 전체 너비에 걸쳐 배치 */
  gap: 10px; /* 버튼 사이 간격 */
  margin-top: 20px; /* 버튼 그룹 위 여백 */
  width: 100%; /* 부모 너비를 꽉 채우기 */
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

export const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;
