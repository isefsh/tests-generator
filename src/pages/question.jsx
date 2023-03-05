import React, { useContext, useState } from "react";
import { db } from "../assets/db";
import { TestContext } from "../context/TestContext";

const Question = () => {

    const { testData } = useContext(TestContext);
q
/*    const selectQuestions = () => {
        const questions = testData.indexQuestions.map((i) => db.questions[i]);
        
    }
    /*const question = () => {
        const [question, setQuestion] = useState([]);
        
    }*/

    return(        
        <div>
            <h1>Dados do formulário:</h1>
            <p>Nome do(a) aluno(a): {testData.enteredName}</p>
            <p>Tema escolhido: {testData.choosenTheme}</p>
            <ul>
                {
                    testData.questions.map((question, index) => (
                        <li key={index}>
                            {question.question}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Question;