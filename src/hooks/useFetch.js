import { useEffect, useState } from "react";

function useFetch({ url }) {
  const [response, setResponse] = useState({
    data: [],
    error: null,
    loading: false,
  });
  useEffect(() => {
    setResponse((prev => ({ ...prev, loading: true, error: null })));
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResponse((prev => ({ ...prev, loading: false, data })));
      })
      .catch((error) => {
        setResponse((prev => ({ ...prev, loading: false, error })));
      });
  }, []);
  return response;
}

export default useFetch;
