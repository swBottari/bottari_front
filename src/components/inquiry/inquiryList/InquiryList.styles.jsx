import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: space-around;
`;

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin: 0 auto;
  background-color: #f5f0e8;
  border-radius: 10px;
  padding: 20px;
`;

export const Header = styled.h2`
  background-color: #b39b7d;
  color: white;
  padding: 10px;
  margin: 0;
  border-radius: 5px 5px 0 0;
  text-align: center;
`;

export const Content = styled.div`
  height: 40vh;
  background-color: white;
  padding: 20px;
  border-radius: 0 0 5px 5px;
`;

export const InquiryItem = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #000000;
  padding-bottom: 10px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Question = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Answer = styled.p`
  font-size: 18px;
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 5px;
`;

export const PageNumber = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
`;

export const WriteSection = styled.div`
  margin-left: auto;
  margin-bottom: 2vh;
  padding: 20px 30px;
  border-radius: 10px;
  font-size: 30px;
  cursor: pointer;
  background-color: #b39b7d;
`;
