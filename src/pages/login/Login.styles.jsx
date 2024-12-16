import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  width: 100%;
  background-color: #f5f5f5;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: xxx-large;
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
