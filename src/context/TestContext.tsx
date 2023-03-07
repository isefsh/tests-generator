import React from "react";
import { TestContextProps, TestDataProps } from "../interfaces/test-interface";

interface ChildrenProps {
  children: React.ReactNode
}

export const TestContext = React.createContext<TestContextProps>({
  testData: {
    enteredName: "",
    choosenTheme: "",
    questions: [
      { abbrTheme: "", question: "", options: ["", "", "", ""], rightAnswer: 0, userAnswer: 0, result: "" }
    ],
    theme: {
      id: 0,
      abbrTheme: "",
      name: "",
    }
  },
  saveTestData: (data: any) => {},
});

export const TestProvider = ({ children }: ChildrenProps) => {
  const [testData, setTestData] = React.useState<any>({});

  const saveTestData = (data: any) => {
    setTestData(data);
  };

  return (
    <TestContext.Provider value={{ testData, saveTestData }}>
      { children }
    </TestContext.Provider>
  )
};