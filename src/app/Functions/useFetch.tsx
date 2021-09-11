import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Props {
  city: string;
  zipcode?: number | null;
  state?: string;
  country?: string;
  coordinates?:
    | {
        latitude: number;
        longitude: number;
      }
    | undefined;
  units?: string;
}

export const useFetch = ({
  city,
  zipcode,
  state,
  country,
  coordinates,
  units = "M",
}: Props) => {
  const [data, setData] = useState({
    city_name: "",
    country_code: "",
    data: [],
    lat: "",
    lon: "",
    state_code: "",
    timezone: "",
  });
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const KEY = "aa8a0e8599de46a088c44216be35f546";
  // let URL = "";
  const URL = useRef("");
  const params: any = [];

  const getData = async () => {
    await axios
      .get(URL.current)
      .then((res) => {
        setData({ ...res.data });
        setPending(false);
        console.log(res.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };
  const handleURLFormatting = () => {
    if (country) {
      params.push(`&country=${country}`);
    }
    if (typeof zipcode === "number") {
      params.push(`&postal_code=${zipcode}`);
    }
    if (coordinates?.latitude && coordinates?.longitude) {
      params.push(
        `&lat=${coordinates?.latitude}&lon=${coordinates?.longitude}`
      );
    }
    if (units || units === "M") {
      params.push(`&units=${units}`);
    }
    URL.current = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}${[
      ...params,
    ]}&days=16&key=${KEY}`;
  };

  useEffect(() => {
    handleURLFormatting();
    // getData();
    console.log("from useEffect");
  }, [city, zipcode]);
  return { data, isPending, error };
};
