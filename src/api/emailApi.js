import axios from 'axios';

const landingPageApi = axios.create({
  baseURL: 'https://ilzro39yk0.execute-api.sa-east-1.amazonaws.com'
});

export default landingPageApi;