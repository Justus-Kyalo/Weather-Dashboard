import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (params = "nairobi") => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async (city) => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: city },
        headers: {
          "X-RapidAPI-Key":
            "53d001c7bfmshefa5d3fdc58de9fp16fdfejsnf5dc086972f4",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        if (isMounted) {
          const response = await axios.request(options);
          setData(response.data);
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

  return { fetchError, data, isLoading };
};

export default useAxiosFetch;
