import { styled } from 'styled-components';
import SImage from '../../../assets/images/SearchBarImage.svg';
import SIcon from '../../../assets/images/SearchIcon.svg';

export const SearchBar = styled.div`
  width: 60%;
  height: 8vh;
  border-radius: 20px;
  border: 2px solid #ccc;
  background-color: #ffffff;
  font-size: 1rem;
  color: #333;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`;

export const InputImage = styled.div`
  background-image: url(${SImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const InputArea = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  color: #000000;
  outline: none;

  &::placeholder {
    color: rgb(49, 49, 49);
  }
`;

export const InputIcon = styled.div`
  background-image: url(${SIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: 20px;
`;
