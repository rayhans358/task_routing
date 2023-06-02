import { useEffect, useState } from "react"

export const useApi = () => {
  const [apiUrl, setApiUrl] = useState();
  const [apiKey, setApiKey] = useState();
  
  useEffect(() => {
    setApiUrl(process.env.REACT_APP_API_URL)
    setApiKey(process.env.REACT_APP_API_KEY)
  }, []);

  return {
    apiUrl,
    apiKey
  }
}