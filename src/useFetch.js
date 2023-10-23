import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // State properties
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // Fetching blog list data from the server
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("couldn't fetch blog list");
          }
          return res.json();
        })
        .then((data) => {
          // Updating blog state with new data
          setData(data);
          setIsPending(false);
          setError(null);
        })
        // Catches network errors and fires a function
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  return { data, isPending, error };
};

// export default useFetch;
