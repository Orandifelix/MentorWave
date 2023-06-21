import { createContext, useEffect, useState } from "react";
import Axios from "axios";

const AppContext = createContext();
const baseUrl = "https://api.jsonbin.io/v3/b/6481e2bf8e4aa6225eab25c4";

function ContextProvider({ children }) {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const response = await Axios.get(baseUrl);
        if (response.status === 200) {
          setMentors(response.data.record.mentors);
        } else throw new Error("Fetch failed with status " + response.status);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const context= {
    mentors,
    setMentors
  }

  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  );
}
export { ContextProvider, AppContext };
