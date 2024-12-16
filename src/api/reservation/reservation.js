import { sendRequest } from '../request';
import { reserveInstance } from '../instance';
import { useSetRecoilState } from 'recoil';
import { reservePrice } from '../../recoil/Items/itemsRecoilState';

export const useReserveHook = () => {
  const setReservePriceState = useSetRecoilState(reservePrice);
  const reserveInner = async formData => {
    const response = await sendRequest(reserveInstance, 'post', '/domestic', {
      productType: formData.productType,
      productPrice: formData.productPrice,
      productWeight: formData.productWeight,
      remark: formData.remark,
      quantity: formData.quantity,

      nameSend: formData.nameSend, // 보내는 분 정보
      addressSend: formData.addressSend,
      numberSend: formData.numberSend,

      nameReceive: formData.nameReceive, // 받는 분 정보
      addressReceive: formData.addressReceive,
      numberReceive: formData.numberReceive,

      additionalDocument: formData.additionalDocument,
    });

    return response;
  };

  const reserveOut = async formData => {
    const response = await sendRequest(reserveInstance, 'post', '/abroad', {
      productType: formData.productType,
      productPrice: formData.productPrice,
      productWeight: formData.productWeight,
      remark: formData.remark,
      quantity: formData.quantity,

      nameSend: formData.nameSend, // 보내는 분 정보
      addressSend: formData.addressSend,
      numberSend: formData.numberSend,

      receiverName: formData.receiverName, // 받는 분 정보
      receiverCountry: formData.receiverCountry,
      receiverCity: formData.receiverCity,
      receiverState: formData.receiverState,
      receiverZipcode: formData.receiverZipcode,
      receiverAddress: formData.receiverAddress,
      receiverNumber: formData.receiverNumber,

      shippingStatus: formData.shippingStatus,
      additionalDocument: formData.additionalDocument,
    });

    return response;
  };

  const getReserveInnerPrice = async formData => {
    const response = await sendRequest(reserveInstance, 'get', '/domestic', {
      productType: formData.productType,
      productPrice: formData.productPrice,
      productWeight: formData.productWeight,
      remark: formData.remark,
      quantity: formData.quantity,

      nameSend: formData.nameSend, // 보내는 분 정보
      addressSend: formData.addressSend,
      numberSend: formData.numberSend,

      nameReceive: formData.nameReceive, // 받는 분 정보
      addressReceive: formData.addressReceive,
      numberReceive: formData.numberReceive,
    });

    setReservePriceState(response.data.responseDto.totalPrice);
  };

  const getReserveOutPrice = async formData => {
    const response = await sendRequest(reserveInstance, 'get', '/abroad', {
      productType: formData.productType,
      productPrice: formData.productPrice,
      productWeight: formData.productWeight,
      remark: formData.remark,
      quantity: formData.quantity,

      nameSend: formData.nameSend, // 보내는 분 정보
      addressSend: formData.addressSend,
      numberSend: formData.numberSend,

      receiverName: formData.receiverName, // 받는 분 정보
      receiverCountry: formData.receiverCountry,
      receiverCity: formData.receiverCity,
      receiverState: formData.receiverState,
      receiverZipcode: formData.receiverZipcode,
      receiverAddress: formData.receiverAddress,
      receiverNumber: formData.receiverNumber,
    });

    setReservePriceState(response.data.responseDto.totalPrice);
  };

  return {
    reserveInner,
    reserveOut,
    getReserveInnerPrice,
    getReserveOutPrice,
  };
};
