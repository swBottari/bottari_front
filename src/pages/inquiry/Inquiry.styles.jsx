import { styled } from 'styled-components';
import bgImage from '../../assets/images/MainBackground.png';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TopImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
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

export const InquiryTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const InquirySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 70vh;
  width: 70%;
`;
