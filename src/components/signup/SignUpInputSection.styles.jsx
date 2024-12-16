import { styled } from 'styled-components';

// 전체 컨테이너 (3:1 비율로 나눔)
export const PageContainer = styled.div`
  display: flex;
  flex-direction: col; /* 가로 방향으로 배치 */
  width: 100%;
  height: 100vh;
  background: url('../../assets/images/background.jpg') no-repeat center center / cover;
`;

// 왼쪽 섹션
export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 오른쪽 섹션
export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 중앙 구분선
export const Divider = styled.div`
  width: 2px;
  height: 60%;
  background-color: #ddd;
  align-self: center;
`;

// 로고 이미지
export const LogoImage = styled.img`
  width: 150px;
  height: 150px;
`;

// 폼 컨테이너
export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// 입력 필드와 레이블
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

export const ResetButton = styled.button`
  background-color: #ff6b00;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff8533;
  }
`;

export const SubmitButton = styled.button`
  background-color: #663300;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #804000;
  }
`;
