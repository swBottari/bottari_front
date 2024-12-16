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
    pcc: '', //통관번호
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
      !formData.pcc ||
      !formData.receiverName ||
      !formData.receiverCountry
    ) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    alert('등록되었습니다.');
    navigate('/');
  };
  //1216 첨부파일추가모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFileUpload = event => {
    const file = event.target.files[0];
    if (file) {
      alert(`파일 "${file.name}"이 업로드되었습니다.`);
      setUploadedFiles(prev => [...prev, file.name]);
      setIsModalOpen(false); // 파일 업로드 후 모달 닫기
    }
  };
  return (
    <S.FormWrapper>
      <S.Section>
        <S.SectionTitle>물품 정보</S.SectionTitle>

        <S.FormRow style={{ display: 'flex', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
            <S.Label required>상품 종류</S.Label>
            <S.Select name="productType" value={formData.productType} onChange={handleChange}>
              <option value="">물품 선택</option>
              <option value="electronics">전자제품</option>
              <option value="clothes">의류</option>
            </S.Select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
            <S.Label required>상품 가격</S.Label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <S.Input
                type="number"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleChange}
                placeholder="물품 가액"
              />
              <span>원</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
            <S.Label required>무게</S.Label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <S.Input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="물품 무게"
              />
              <span>kg</span>
            </div>
          </div>
        </S.FormRow>

        <S.FormRow style={{ display: 'flex', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
            <S.Label required>통관번호</S.Label>
            <S.Input name="pcc" value={formData.pcc} onChange={handleChange} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
            <S.Label required>수량</S.Label>
            <S.Input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
            <S.Label>특이사항</S.Label>
            <S.Input
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="특이사항"
            />
          </div>
        </S.FormRow>
      </S.Section>

      <S.Section>
        <S.SectionTitle>보내는 분</S.SectionTitle>
        <S.FormRow style={{ display: 'flex', gap: '20px' }}>
          <S.Label required>이름</S.Label>
          <div style={{ flex: 1 }}>
            <S.Input
              name="senderName"
              value={formData.senderName}
              onChange={handleChange}
              width="350px"
            />
          </div>
          <S.Label required>연락처</S.Label>
          <div style={{ flex: 1 }}>
            <S.Input
              name="senderPhone"
              value={formData.senderPhone}
              onChange={handleChange}
              width="350px"
            />
          </div>
        </S.FormRow>
        <S.FormRow>
          <S.Label required>주소</S.Label>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <S.Input width="130px" />
              <S.Label style={{ left: '50%', transform: 'translateX(45%)' }}> - </S.Label>
              <S.Input width="130px" />
              <S.SearchButton>주소 검색</S.SearchButton>
            </div>
            <S.AddressInput />
          </div>
        </S.FormRow>
        <S.FormRow>
          <S.Label required>상세 주소</S.Label>
          <S.AddressInput placeholder="상세주소" />
          <span></span>
        </S.FormRow>
      </S.Section>

      <S.Section>
        <S.SectionTitle>받는 분</S.SectionTitle>

        {/* 첫 번째 그룹: Name, Tel.No */}
        <S.FormRow style={{ display: 'flex', gap: '20px' }}>
          <S.Label required>Name</S.Label>
          <div style={{ flex: 1 }}>
            <S.Input name="receiverName" value={formData.receiverName} onChange={handleChange} />
          </div>
          <S.Label required>Tel.No</S.Label>
          <div style={{ flex: 1 }}>
            <S.Input name="receiverPhone" value={formData.receiverPhone} onChange={handleChange} />
          </div>
        </S.FormRow>

        {/* 두 번째 그룹: Country, ZipCode */}
        <S.FormRow style={{ display: 'flex', gap: '20px' }}>
          <S.Label required>Country</S.Label>
          <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
            <S.Input
              width="200px"
              name="receiverCountry"
              value={formData.receiverCountry}
              onChange={handleChange}
            />
            <S.SearchButton>국가 검색</S.SearchButton>
          </div>

          <S.Label required>ZipCode</S.Label>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <S.Input
                width="200px"
                name="receiverZipCode"
                value={formData.receiverZipCode}
                onChange={handleChange}
              />
              <S.SearchButton>우편 번호검색</S.SearchButton>
            </div>
          </div>
        </S.FormRow>

        {/* 세 번째 그룹: City, State */}
        <S.FormRow style={{ display: 'flex', gap: '20px' }}>
          <S.Label required>City</S.Label>
          <div style={{ flex: 1 }}>
            <S.Input name="receiverCity" value={formData.receiverCity} onChange={handleChange} />
          </div>
          <S.Label required>State</S.Label>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <S.Input name="receiverState" value={formData.receiverState} onChange={handleChange} />
          </div>
        </S.FormRow>

        {/* 마지막 그룹: Detail */}
        <S.FormRow>
          <S.Label>Detail</S.Label>
          <S.TextArea
            name="receiverDetail"
            value={formData.receiverDetail}
            onChange={handleChange}
          />
        </S.FormRow>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <S.DocButton onClick={handleOpenModal}>필요서류등록</S.DocButton>
        </div>
      </S.Section>

      <S.Footer>
        <S.NoteButton onClick={handleSubmit}>유의사항 읽기</S.NoteButton>
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
      {/* 1216 파일업로드모달추가 */}
      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <h3>파일 업로드</h3>
            <S.FileInput type="file" onChange={handleFileUpload} />
            <S.CloseButton onClick={handleCloseModal}>닫기</S.CloseButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
      {/* 업로드된 파일명 표시  **1216 실제 업로드x */}
      {uploadedFiles.length > 0 && (
        <div style={{ marginTop: '10px', textAlign: 'left' }}>
          <strong>업로드된 파일</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
            {uploadedFiles.map((fileName, index) => (
              <li key={index}>{fileName}</li>
            ))}
          </ul>
        </div>
      )}
    </S.FormWrapper>
  );
}

export default OutReserveInputSection;
