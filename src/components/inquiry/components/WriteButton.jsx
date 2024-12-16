import React from 'react';
import { useSetRecoilState } from 'recoil';
import { inquiryPageState } from '../../../recoil/user/myPageRecoilState';

function WriteButton() {
  const setInquiryPageValue = useSetRecoilState(inquiryPageState);

  const handleClickWrite = () => {
    setInquiryPageValue('write');
  };

  return (
    <div onClick={handleClickWrite}>
      <>작성하기</>
    </div>
  );
}

export default WriteButton;
