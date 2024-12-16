import { sendRequest } from '../request';
import { userInstance } from '../instance';

export const useUserHook = () => {
  const loginUser = async formData => {
    const response = await sendRequest(userInstance, 'post', '/login', {
      id: formData.id,
      pw: formData.password,
    });

    localStorage.setItem('name', response.data.responseDto.name);

    return response;
  };

  const signUpUser = async formData => {
    const response = await sendRequest(userInstance, 'post', '/signup', {
      id: formData.id,
      name: formData.name,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      phone: formData.phone,
      address: formData.address,
      email: formData.email,
      termsAgreed: true,
      privacyAgreed: true,
    });

    return response;
  };

  const refacUser = async formData => {
    const response = await sendRequest(userInstance, 'patch', '/modify', {
      id: formData.id,
      name: formData.name,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      phone: formData.phone,
      address: formData.address,
      email: formData.email,
    });

    return response;
  };

  return {
    loginUser,
    signUpUser,
    refacUser,
  };
};
