import billionaires from '../assets/billionaires.json';

export const getBillionaires = () => {
  return billionaires;
};

export const filterBillionaires = (country = '', industry = '') => {
  return billionaires.filter(b => {
    return (
      (country ? b.country === country : true) &&
      (industry ? b.industry === industry : true)
    );
  });
};

// Fungsi untuk ambil daftar negara unik
export const getCountries = () => {
  return [...new Set(billionaires.map(b => b.country))];
};

// Fungsi untuk ambil daftar industri unik
export const getIndustries = () => {
  return [...new Set(billionaires.map(b => b.industry))];
};
