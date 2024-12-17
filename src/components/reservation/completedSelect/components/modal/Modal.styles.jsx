import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 101;
`;

export const Title = styled.h3`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${props => (props.cancel ? '#ccc' : '#f39c12')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  & + span {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }

  & + span:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 3px;
  }

  &:checked + span:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid #f39c12;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
