import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

const useCustomFetch = (initialState, url) => {
  const [data, setData] = useState(initialState);

  const fetchData = useCallback(async () => {
    try {
      const data = await axios.get(url);
      setData(data.data.result);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

export default useCustomFetch;
