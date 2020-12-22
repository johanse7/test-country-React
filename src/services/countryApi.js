const URL_BASE = "https://restcountries.eu/rest/v2";

export const getCountriesByRegional = async ({ codeRegional }) => {
  const response = await fetch(`${URL_BASE}/regionalbloc/${codeRegional}`);
  return await response.json();
};
