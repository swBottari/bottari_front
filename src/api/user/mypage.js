import { sendRequest } from '../request';
import { mypageInstance } from '../instance';
import { useSetRecoilState } from 'recoil';
import {
  deliveryRecoilState,
  inquiryListRecoilState,
  inquiryRecoilState,
  myPageRecoilState,
} from '../../recoil/user/myPageRecoilState';
import { replace } from 'react-router-dom';

export const useMypageHook = () => {
  const userName = localStorage.getItem('name');
  const setMyPageState = useSetRecoilState(myPageRecoilState);
  const setDeliveryState = useSetRecoilState(deliveryRecoilState);
  const setInquiryListState = useSetRecoilState(inquiryListRecoilState);
  const setInquiryState = useSetRecoilState(inquiryRecoilState);

  const getMyPage = async formData => {
    const response = await sendRequest(mypageInstance, 'get', '', {
      params: {
        userName: userName,
        page: formData.page,
      },
    });

    setMyPageState(response.data.responseDto);
  };

  const getDeliveryState = async formData => {
    const response = await sendRequest(mypageInstance, 'get', '/status', {
      params: {
        orderId: formData.orderId,
      },
    });

    setDeliveryState(response.data.responseDto);
  };

  const postUserInquiry = async formData => {
    const response = await sendRequest(mypageInstance, 'post', '/inquiry', {
      title: formData.title,
      content: formData.content,
      orderId: formData.orderId,
      writer: formData.writer,
      date: formData.date,
    });

    return response;
  };

  const getUserInquiryList = async formData => {
    const response = await sendRequest(mypageInstance, 'get', '/iquiryList', {
      params: {
        name: userName,
        page: formData.page,
      },
    });

    setInquiryListState(response.data.responseDto);
  };

  const getUserInquiry = async formData => {
    const response = await sendRequest(mypageInstance, 'get', '/iquiry', {
      params: {
        inquiryId: formData.inquiryId,
      },
    });

    setInquiryState(response.data.responseDto);
  };

  return {
    getMyPage,
    getDeliveryState,
    postUserInquiry,
    getUserInquiryList,
    getUserInquiry,
  };
};
