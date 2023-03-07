import React from "react";

export interface ThemeProps {
  id: number,
  abbrTheme: string,
  name: string,
}

export interface QuestionsProps {
  abbrTheme: string,
  question: string,
  options: Array<string>,
  rightAnswer: number,
  userAnswer: number,
  result: string,
}

export interface TestDataProps {
  enteredName: string,
  choosenTheme: string,
  questions: Array<QuestionsProps>,
  theme: ThemeProps,
}

export interface TestContextProps {
  testData: TestDataProps,
  saveTestData: (data: any) => void,
}