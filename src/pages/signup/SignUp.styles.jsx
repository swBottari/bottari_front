import { styled } from 'styled-components';
import bgImage from '../../assets/images/MainBackground.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 10vh;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -1;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: xxx-large;
`;
