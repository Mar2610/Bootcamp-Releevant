import { useState, useEffect } from "react";

const useFetch = (url, requestObject) => {
  const [data, setData] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      }

      async function fetchWithRequest() {
        const requestStudent = {
            method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        };
        await fetch(url, requestObject);
      }
      fetchData();
    },
    [url]
  );
  return data;
};

export default useFetch;
