import { styled } from 'styled-components';
import bgImage from '../../../assets/images/MainBackground.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

export const TopImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: xxx-large;
`;

export const InputSection = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
