import "./App.css";
import CountryList from "./components/countries";
import useCountriesList from "./hooks/useCountriesList";

function App() {
  const { countryList, pending, error } = useCountriesList();
  return (
    <div className="App">
      {pending ? (
        <h2>Cargando....</h2>
      ) : (
        <CountryList countries={countryList} />
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
