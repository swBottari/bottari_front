import { styled } from 'styled-components';

// 전체 페이지 컨테이너 (좌우 레이아웃)
export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

// 왼쪽 섹션
export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

// 오른쪽 섹션
export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

// 중앙 구분선
export const Divider = styled.div`
  width: 2px;
  height: 60%;
  background-color: #ddd;
  align-self: center;
`;

// 로그인 제목
export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  background-color: #fff; /* 배경색 조정 */
  padding: 10px 20px;
  border-radius: 4px;
`;

// 입력창과 버튼 그룹
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 300px;
`;

// 입력 필드
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

// 로그인 버튼
export const LoginButton = styled.button`
  padding: 12px;
  background-color: #8b4513;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #a0522d;
  }
`;

// 아이디/비밀번호 찾기 텍스트
export const FindAccountText = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// 회원가입 버튼
export const SignupButton = styled.button`
  margin-top: 20px;
  padding: 12px;
  background-color: #8b4513;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #a0522d;
  }
`;

// 로고 이미지
export const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

// 환영 메시지
export const WelcomeMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: #333;
`;

// 로그인 상단 타이틀
export const PageTitle = styled.div`
  width: 100%; /* 전체 너비 */
  background-color: #fff; /* 배경색 */
  padding: 20px 0; /* 상하 패딩으로 여백 확보 */
  text-align: center; /* 텍스트 중앙 정렬 */
  font-size: 32px;
  font-weight: bold;
  color: #333; /* 글자 색상 */
  border-bottom: 1px solid #ddd; /* 아래쪽 경계선으로 구분감 추가 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  z-index: 10; /* 다른 요소 위에 위치 */
  position: relative; /* 위치 지정 */
`;
