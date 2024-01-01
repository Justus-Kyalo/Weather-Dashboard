import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (params = "nairobi") => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState([]);

  const [coordinates, setCoordinates] = useState({
    lat: 51.5073219,
    lon: -0.1276474,
  });

  useEffect(() => {
    let isMounted = true;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const apiKey = "aa57f8effc10b239859b1dfb9425a9be";

    const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=`;
    const limit = 1;

    const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?";
    const fetchData = async (city) => {
      try {
        if (isMounted) {
          const response = await axios.get(apiUrl + city + `&appid=${apiKey}`);
          setData(response.data);
          const geoApiResponse = await axios.get(
            geoApiUrl + city + `&limit=${limit}` + `&appid=${apiKey}`
          );
          setCoordinates({
            lat: geoApiResponse.data[0].lat,
            lon: geoApiResponse.data[0].lon,
          });

          console.log(coordinates);
          if (geoApiResponse.data.length) {
            const forecastRes = await axios.get(
              forecastApiUrl +
                `lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`
            );
            setForecast(forecastRes.data.list);
            console.log(forecastRes.data);
          }

          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          console.log(`Failed to fetch: ${error.message}`);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(params);

    return () => {
      isMounted = false;
    };
  }, [params]);

  return { fetchError, data, isLoading, forecast };
};

export default useAxiosFetch;
