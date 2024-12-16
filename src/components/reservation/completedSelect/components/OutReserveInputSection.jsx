import React, { useState } from 'react';
import * as S from './OutReserveInputSection.styles';
import { useNavigate } from 'react-router-dom';

function OutReserveInputSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productType: '',
    productPrice: '',
    weight: '',
    quantity: '',
    senderName: '',
    senderAddress: '',
    senderDetailAddress: '',
    receiverName: '',
    receiverPhone: '',
    receiverCountry: '',
    receiverCity: '',
    receiverState: '',
    receiverZipCode: '',
    receiverDetail: '',
    deposit: 5000,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.productType ||
      !formData.productPrice ||
      !formData.weight ||
      !formData.receiverName ||
      !formData.receiverCountry
    ) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    alert('등록되었습니다.');
    navigate('/');
  };

  return (
    <S.FormWrapper>
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
          <S.Label>수량</S.Label>
          <S.Input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </S.FormRow>
      </S.Section>

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
          <S.Label required>Name</S.Label>
          <S.Input name="receiverName" value={formData.receiverName} onChange={handleChange} />
        </S.FormRow>
        <S.FormRow>
          <S.Label required>Tel.No</S.Label>
          <S.Input name="receiverPhone" value={formData.receiverPhone} onChange={handleChange} />
        </S.FormRow>
        <S.FormRow>
          <S.Label required>Country</S.Label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <S.Input
              width="200px"
              name="receiverCountry"
              value={formData.receiverCountry}
              onChange={handleChange}
            />
            <S.SearchButton>국가 검색</S.SearchButton>
          </div>
        </S.FormRow>
        <S.FormRow>
          <S.Label>City</S.Label>
          <S.Input name="receiverCity" value={formData.receiverCity} onChange={handleChange} />
        </S.FormRow>
        <S.FormRow>
          <S.Label>State</S.Label>
          <S.Input name="receiverState" value={formData.receiverState} onChange={handleChange} />
        </S.FormRow>
        <S.FormRow>
          <S.Label required>ZipCode</S.Label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <S.Input
              width="200px"
              name="receiverZipCode"
              value={formData.receiverZipCode}
              onChange={handleChange}
            />
            <S.SearchButton>우편 번호검색</S.SearchButton>
          </div>
        </S.FormRow>
        <S.FormRow>
          <S.Label>Detail</S.Label>
          <S.TextArea
            name="receiverDetail"
            value={formData.receiverDetail}
            onChange={handleChange}
          />
        </S.FormRow>
      </S.Section>

      <S.Footer>
        <S.CheckboxWrapper>
          <S.CheckboxInput type="checkbox" />
          <span>픽업 예약 유의사항 안내를 확인하였으며 이에 동의합니다.</span>
        </S.CheckboxWrapper>
        <div>
          <span>예상운임</span>
          <S.Input
            type="text"
            value={formData.deposit}
            readOnly
            style={{ width: '100px', marginLeft: '10px', marginRight: '5px' }}
          />
          <span>원</span>
        </div>
        <S.SubmitButton onClick={handleSubmit}>등록하기</S.SubmitButton>
      </S.Footer>
    </S.FormWrapper>
  );
}

export default OutReserveInputSection;
