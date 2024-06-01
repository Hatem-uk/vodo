import axios from "axios";
import { useEffect, useState } from "react";

interface ApiResponse {
    id: number;
    title: string;
}

const useFetchDetails = (endpoint: string) => {
  const [data, setData] = useState<ApiResponse | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<ApiResponse>(endpoint);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetchDetails;
