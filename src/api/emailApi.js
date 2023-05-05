import axios from 'axios';

const landingPageApi = axios.create({
  baseURL: 'https://landing-page-profesional-api-erfcg.onrender.com/api/landing-robertocg/v1'
});

export default landingPageApi;