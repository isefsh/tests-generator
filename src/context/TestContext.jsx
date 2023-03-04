import { createContext, useState } from "react";

export const TestContext = createContext();

export const TestProvider = ({children}) => {
    const [testData, setTestData] = useState({});
  
    const saveTestData = (data) => {
      setTestData(data);
    };
  
    return (
      <TestContext.Provider value={{ testData, saveTestData }}>
        {children}
      </TestContext.Provider>
    );
};