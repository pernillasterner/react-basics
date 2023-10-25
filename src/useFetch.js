import { useState, useEffect } from "react";

// Run server
// npx json-server --watch data/db.json --port 8000
export const useFetch = (url) => {
  // State properties
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // Fetching blog list data from the server
  useEffect(() => {
    // Associating this controller with the fetch request
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
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
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
