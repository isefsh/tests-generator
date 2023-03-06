import React from "react";

interface ChildrenProps {
  children: React.ReactNode
}

interface ThemeProps {
  id: number,
  abbrTheme: string,
  name: string,
}

interface QuestionsProps {
  abbrTheme: string,
  question: string,
  options: Array<string>,
  rightAnswer: number,
}

interface TestDataProps {
  enteredName: string,
  choosenTheme: string,
  questions: Array<QuestionsProps>,
  theme: ThemeProps,
}

export const TestContext = React.createContext<any>({
  testData: {
    enteredName: "",
    choosenTheme: "",
    questions: [
      { abbrTheme: "", question: "", options: ["", "", "", ""], rightAnswer: 0 }
    ],
    theme: {
      id: 0,
      abbrTheme: "",
      name: "",
    }
  },
  saveTestData: (data: TestDataProps) => {},
});

export const TestProvider = ({ children }: ChildrenProps) => {
  const [testData, setTestData] = React.useState<any>({});

  const saveTestData = (data: TestDataProps) => {
    setTestData(data);
  };

  return (
    <TestContext.Provider value={{ testData, saveTestData }}>
      { children }
    </TestContext.Provider>
  )
};