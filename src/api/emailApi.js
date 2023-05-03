import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariable';

const { VITE_API_URL } = getEnvVariables();

const landingPageApi = axios.create({
  baseURL: VITE_API_URL
});

export default landingPageApi;