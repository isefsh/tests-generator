type TestDataObject = {
    studentName: string;
    choosenTheme: string;
};

type Question = {
    id: number;
    themeAcronym: string;
    themeFullName: string;
    question: string;
    options: string[];
    rightAnswer: number;
    userAnswer: number | null;
};

export {};