import { styled } from 'styled-components';
import bgImage from '../../../assets/images/MainBackground.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

//1216김효정 이미지 투명도 추가
export const TopImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100%;
  position: relative; /* ::before 가상 요소를 사용하기 위해 position을 relative로 설정 */

  /* 배경 이미지 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5; /* 원하는 투명도 값 설정 */
    z-index: -1; /* 텍스트보다 뒤에 배경 이미지가 오도록 설정 */
  }

  /* 텍스트 스타일 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1; /* 텍스트가 이미지 위에 표시되도록 설정 */
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: xxx-large;
`;
