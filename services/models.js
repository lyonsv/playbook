import api from './api';

const makesModelsList = (makeId) => api.get(`/makes/${makeId}/car_models`);

export {makesModelsList};
