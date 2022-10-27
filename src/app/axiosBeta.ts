import axios from 'axios';

// const BETA_URL = 'https://beta.amity.services';
const BETA_URL = 'https://staging.amity.services';

export const axiosBeta = axios.create({ baseURL: BETA_URL });

export const axiosBetaSetToken = (token?: string) => {
  if (!token) return;
  axiosBeta.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const axiosBetaRemoveAllToken = () => {
  delete axiosBeta.defaults.headers.common['Authorization'];
};
