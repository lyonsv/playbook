import api from './api';

const carsList = (makeId, modelId) =>
  api.get(`makes/${makeId}/car_models/${modelId}/cars`);

export {carsList};
