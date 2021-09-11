import React, { useState } from "react";
import SearchHeader from "./Components/SearchHeader";
import { useFetch } from "./Functions/useFetch";
import WeatherCard from "./WeatherCard/WeatherCard";
import TodaysWeather from "./TodaysWeather";
import Loading from "./Components/Loading";

interface Params {
  city: string;
  zipcode: number;
  state: string;
  country: string;
  coordinates:
    | {
        latitude: number;
        longitude: number;
      }
    | undefined;
}

const Weather = () => {
  const [params, setParams] = useState<Params>({
    city: "New York",
    zipcode: 11220,
    state: "",
    country: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  });

  const { data, isPending, error } = useFetch({ ...params });

  return (
    <div>
      <SearchHeader {...params} data isPending error />
      {/* {isPending ? <Loading /> : <div>current weather</div>} */}
      <WeatherCard {...params} data={data} />
    </div>
  );
};

export default Weather;
