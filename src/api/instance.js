import axios from 'axios';
import { applyInterceptors } from './interceptor';

//.env로 숨긴 url 주소 (backend 주소 <-> front 주소)
// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

const exampleInstance = axios.create(defaultInstance.defaults);
exampleInstance.defaults.baseURL += '/example';

applyInterceptors(exampleInstance);

export { defaultInstance, exampleInstance };
