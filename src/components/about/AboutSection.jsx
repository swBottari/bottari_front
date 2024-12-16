import React, { useState } from 'react';
import * as S from './AboutSection.styles';

function AboutSection() {
  const [activeTab, setActiveTab] = useState('규정');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <S.Container>
      <S.TabContainer>
        <S.Tab active={activeTab === '규정'} onClick={() => handleTabClick('규정')}>
          규정 안내
        </S.Tab>
        <S.Tab active={activeTab === '운임'} onClick={() => handleTabClick('운임')}>
          운임 안내
        </S.Tab>
      </S.TabContainer>
      <S.ContentArea>
        {activeTab === '규정' && <h2>규정 안내에 대한 글 및 도표</h2>}
        {activeTab === '운임' && <h2>운임 안내에 대한 내용</h2>}
      </S.ContentArea>
    </S.Container>
  );
}

export default AboutSection;
