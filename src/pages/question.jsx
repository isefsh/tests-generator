import React, { useContext } from "react";
import { db } from "../assets/db";
import { TestContext } from "../context/TestContext";

const Question = () => {

    const { testData } = useContext(TestContext);

    return(        
        <div>
            <h1>Dados do formulário:</h1>
            <p>Nome do(a) aluno(a): {testData.enteredName}</p>
            <p>Tema escolhido: {testData.choosenTheme}</p>
            <ul>
                {
                    testData.indexQuestions.map((indexNumbers, index) => (
                        <li key={index}>
                            {indexNumbers}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Question;