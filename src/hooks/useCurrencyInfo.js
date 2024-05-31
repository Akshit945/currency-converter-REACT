import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result[currency]); //to access object
      } catch (error) {
        alert(error+". Try Again ");
      }
    };
    
    fetchData();
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
