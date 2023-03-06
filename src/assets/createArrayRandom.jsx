import React from "react";
import { db } from "../assets/db";

const createRandom = (filterQuestions) =>{
    let randomNumbers;
    let tmp;

    for(let i = filterQuestions.length; i;){
        randomNumbers = Math.random() * i-- | 0; // | 0 -> arredonda valor para inteiro
        tmp = filterQuestions[randomNumbers];
        filterQuestions[randomNumbers] = filterQuestions[i]; // troca o número aleatório pelo atual
        filterQuestions[i] = tmp; // troca o atual pelo aleatório
    }
}

const createArray = (abbrTheme) =>{
    const filterQuestions = db.questions.filter(question => question.abbrTheme === abbrTheme);
    createRandom(filterQuestions);

    return filterQuestions.slice(0, 10); //retorna os 10 primeiros elementos
}

export const createArrayRandom = {
    createArray: createArray
};