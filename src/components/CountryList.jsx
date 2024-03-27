import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";

export default function CountryList({cities, isLoading}) {
  if (isLoading) return <Spinner />

  if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />

  const countries = cities.reduce((sumArr, city) =>
    sumArr.map((c) => c?.country)?.includes(city.country) ? sumArr : [...sumArr, city],
    [])

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => <CountryItem country={country} key={country.country}/>)}
    </ul>
  );
}