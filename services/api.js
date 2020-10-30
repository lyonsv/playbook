import {create} from 'apisauce';

const baseApi = create({
  baseURL: 'https://obscure-temple-32503.herokuapp.com/api/v1/',
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Permitted-Cross-Domain-Policies': 'none',
  },
  timeout: 1200000,
});

const createApi = () => {
  return baseApi;
};

const api = createApi();

export default api;
