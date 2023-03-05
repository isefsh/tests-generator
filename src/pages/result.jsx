import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../assets/db";
import { TestContext } from "../context/TestContext";
import Question from "./question";

const Result = () => {

    
    const { testData } = useContext(TestContext);

    const countResult = () => {
        const nQuestions = testData.questions.length;
        let count = 0;
        for(let i = 0; i < nQuestions; i++){
            if(testData.questions[i].result === "Right"){
                count++;
            }
        }
        return(
            <p>Quantidade de acertos: {count} / {nQuestions}</p>
        );
    }

    return(
        <div>
            {countResult()}
            <ol>
                {
                    testData.questions.map((question, index) => {

                        return (
                            <li key={index}>
                                <p>{question.question}</p>
                                <ol type="a">
                                    {
                                        
                                        testData.questions[index].options.map((option, indexOption) =>
                                            {
                                                return(
                                                    <li key={indexOption}>{option}</li>
                                                )
                                            }
                                        )
                                    }
                                </ol>
                                <p>Resposta correta: {question.rightAnswer}</p>
                                <p>Resposta do usuário: {question.userAnswer}</p>
                                <p>Resultado: {question.result}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
};

export default Result;