// ReserveInputSection.jsx
import React, { useState } from 'react';
import * as S from './ReservationInputSection.styles';

function ReserveInputSection() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    senderAddress: '',
    senderDetailAddress: '',
    receiverName: '',
    receiverPhone: '',
    receiverAddress: '',
    receiverDetailAddress: '',
    productType: '',
    productPrice: '',
    weight: '',
    quantity: '',
    notes: '',
    deposit: 5000,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <S.FormWrapper>
      <S.Section>
        <S.SectionTitle>보내는 분</S.SectionTitle>
        <S.FormRow>
          <S.Label required>이름</S.Label>
          <S.Input name="senderName" value={formData.senderName} onChange={handleChange} />
        </S.FormRow>
        <S.FormRow>
          <S.Label required>주소</S.Label>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <S.Input width="200px" />
              <S.SearchButton>주소 검색</S.SearchButton>
            </div>
            <S.AddressInput placeholder="상세주소" />
          </div>
        </S.FormRow>
      </S.Section>

      <S.Section>
        <S.SectionTitle>받는 분</S.SectionTitle>
        <S.FormRow>
          <S.Label required>이름</S.Label>
          <S.Input name="receiverName" value={formData.receiverName} onChange={handleChange} />
        </S.FormRow>
        <S.FormRow>
          <S.Label required>주소</S.Label>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <S.Input width="200px" />
              <S.SearchButton>주소 검색</S.SearchButton>
            </div>
            <S.AddressInput placeholder="상세주소" />
          </div>
        </S.FormRow>
      </S.Section>

      <S.Section>
        <S.SectionTitle>물품 정보</S.SectionTitle>
        <S.FormRow>
          <S.Label required>상품 종류</S.Label>
          <S.Select name="productType" value={formData.productType} onChange={handleChange}>
            <option value="">물품 선택</option>
            <option value="electronics">전자제품</option>
            <option value="clothes">의류</option>
          </S.Select>
        </S.FormRow>
        <S.FormRow>
          <S.Label required>상품 가격</S.Label>
          <S.Input
            type="number"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
          />
          <span>원</span>
        </S.FormRow>
        <S.FormRow>
          <S.Label required>무게</S.Label>
          <S.Input type="number" name="weight" value={formData.weight} onChange={handleChange} />
          <span>kg</span>
        </S.FormRow>
        <S.FormRow>
          <S.Label>특이사항/주의사항</S.Label>
          <S.TextArea name="notes" value={formData.notes} onChange={handleChange} />
        </S.FormRow>
      </S.Section>

      <S.Footer>
        <S.CheckboxWrapper>
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />
          <span>픽업 예약 유의사항 안내를 확인하였으며 이에 동의합니다.</span>
        </S.CheckboxWrapper>
        <div>
          <span>예상운임</span>
          <S.Input
            type="text"
            value="5000"
            readOnly
            style={{ width: '100px', marginLeft: '10px', marginRight: '5px' }}
          />
          <span>원</span>
        </div>
        <S.SubmitButton>등록하기</S.SubmitButton>
      </S.Footer>
    </S.FormWrapper>
  );
}

export default ReserveInputSection;
