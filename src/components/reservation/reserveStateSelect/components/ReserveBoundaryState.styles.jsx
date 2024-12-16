// ReserveUserSelect.styles.js
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 버튼 간 최소 간격 유지 */
  gap: 30px; /* 버튼들 사이의 간격을 좁히기 위한 설정 */
  height: 80vh;
  width: 65%;
`;

export const ButtonContainer = styled.button`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: white;
  font-size: 2em;
  border: 2px solid black;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 내용 중앙 정렬 */
  align-items: center; /* 내용 중앙 정렬 */
  padding: 20px; /* 여백 추가 */
`;

export const ButtonImage = styled.img`
  width: 100px; /* 이미지 크기 키우기 */
  height: 100px; /* 이미지 크기 키우기 */
  object-fit: contain; /* 이미지 왜곡 방지 */
  margin-bottom: 20px; /* 이미지와 텍스트 사이에 간격 추가 */
`;
