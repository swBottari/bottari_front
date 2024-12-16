// modal.jsx
import React, { useState } from 'react';
import * as S from './Modal.styles';

function DeliveryTermsModal({ isOpen, onClose }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAgree = () => {
    if (isChecked) {
      // 동의 후 처리 로직
      onClose(); // 모달 닫기
    } else {
      alert('약관에 동의해야 합니다.');
    }
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Title>배송 약관</S.Title>
        <S.TextArea disabled>픽업</S.TextArea>
        <S.CheckboxWrapper>
          <S.CheckboxInput checked={isChecked} onChange={handleCheckboxChange} />
          <span>전체 동의합니다.</span>
        </S.CheckboxWrapper>
        <S.ButtonWrapper>
          <S.Button cancel onClick={onClose}>
            취소
          </S.Button>
          <S.Button onClick={handleAgree}>동의하기</S.Button>
        </S.ButtonWrapper>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}

export default DeliveryTermsModal;
