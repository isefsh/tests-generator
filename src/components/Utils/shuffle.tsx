import { questions } from "../../assets/db/questions";
import { localStorageToObject } from "./localStorageToObject";

type TestDataObject = {
    studentName: string;
    choosenTheme: string;
}

type Question = {
    id: number;
    themeAcronym: string;
    themeFullName: string;
    question: string;
    options: string[];
    rightAnswer: number;
    userAnswer: number | null;
    result: string | null;
}

const testDataObject = localStorageToObject<TestDataObject>("testData");

const shuffle = (filterQuestions: Question[]): void => {
    let randomNumbers;
    let tmp;

    for(let i = filterQuestions.length; i;){
        randomNumbers = Math.random() * i-- | 0; // | 0 -> arredonda valor para inteiro
        tmp = filterQuestions[randomNumbers];
        filterQuestions[randomNumbers] = filterQuestions[i]; // troca o número aleatório pelo atual
        filterQuestions[i] = tmp; // troca o atual pelo aleatório
    }
}

const selectQuestions = (): void => {
   if(testDataObject){
        const filterQuestions = questions.filter((question: Question)  => question.themeAcronym === testDataObject.choosenTheme);

        shuffle(filterQuestions);

        //return filterQuestions.slice(0, 10);
        localStorage.setItem("questionsArray", JSON.stringify(filterQuestions.slice(0, 10)));
   }
}

export const shuffleQuestions = {
    selectQuestions: selectQuestions
};