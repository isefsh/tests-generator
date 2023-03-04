import React from "react";
import { db } from "../assets/db";

const createRandom = (list) =>{
    let randomNumbers;
    let tmp;

    for(let i = list.length; i;){
        randomNumbers = Math.random() * i-- | 0; // | 0 -> arredonda valor para inteiro
        tmp = list[randomNumbers];
        list[randomNumbers] = list[i]; // troca o número aleatório pelo atual
        list[i] = tmp; // troca o atual pelo aleatório
    }
}

const createArray = (theme) =>{
    const filterQuestions = db.questions.filter(question => question.theme === theme);
    const nQuestions = filterQuestions.length;
    let list = [];

    for(let i = 0; i < nQuestions; i++){
        list[i] = i + 1;
    }

    createRandom(list);

    return list.slice(0, 10); //retorna os 10 primeiros elementos
}

export const createArrayRandom = {
    createArray: createArray
};