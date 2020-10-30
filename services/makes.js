import api from './api';

const makesList = () => api.get('makes');

export {makesList};
