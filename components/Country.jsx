// countriesAPI.js
import axios from 'axios';

const API_URL = 'https://restcountries.com/v3';

export const getCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error getting countries:', error);
    return [];
  }
};

export const getCountryByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting country "${name}":`, error);
    return null;
  }
};

export const getCountryFlagByCode = async (code) => {
  try {
    const response = await axios.get(`${API_URL}/alpha/${code}`);
    return response.data?.flags[0];
  } catch (error) {
    console.error(`Error getting country flag with code "${code}":`, error);
    return null;
  }
};

export const getCountryDataByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/name/${name}`);
    const country = response.data[0];
    const countryCode = country.cca2 || country.cca3;
    const flag = await getCountryFlagByCode(countryCode);
    return { countryCode, flag };
  } catch (error) {
    console.error(`Error getting country data for "${name}":`, error);
    return null;
  }
};
