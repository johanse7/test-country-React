import { useState, useEffect } from "react";
import { getCountriesByRegional } from "../services/countryApi";

const useCountriesList = ({ codeRegional = "eu" } = {}) => {
  const [countryList, setCountryList] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        debugger;
        const resultCountries = await getCountriesByRegional({ codeRegional });
        setPending(false);
        setCountryList(resultCountries);
      } catch (error) {
        setPending(false);
        setError(error.toString());
      }
    })();
  }, [codeRegional]);

  return {
    countryList,
    pending,
    error,
  };
};

export default useCountriesList;
