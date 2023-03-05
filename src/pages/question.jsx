import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../assets/db";
import { TestContext } from "../context/TestContext";

const Question = () => {

    const { testData } = useContext(TestContext);
    const [indexQuestion, setIndexQuestion] = useState(0);
    const navigate = useNavigate();

    const nextQuestion = () => {
        if(indexQuestion === testData.questions.length -1){
            navigate('/result');
        }else{
            setIndexQuestion(indexQuestion + 1);
        }
    } 

    useEffect(() => {
        const questionData = testData.questions[indexQuestion];
        const questionText = document.getElementById('question');
        const questionOptions = document.getElementById('options');
        const btnNext = document.getElementById('btnNext');

        // Remove as opções antigas antes de adicionar as novas
        questionOptions.innerHTML = '';

        for(let i = 0; i < questionData.options.length; i++){
            const option = document.createElement('li');
            const optionInput = document.createElement('input');
            const optionLabel = document.createElement('label');

            optionInput.type = 'radio';
            optionInput.name = 'option';
            optionInput.value = i + 1;
            optionLabel.textContent = questionData.options[i];

            option.appendChild(optionInput);
            option.appendChild(optionLabel);
            questionOptions.appendChild(option);
        }

        questionText.textContent = questionData.question; 
        btnNext.textContent = 
            indexQuestion === testData.questions.length - 1 
                ? "Finalizar" 
                : "Próxima";

    }, [testData, indexQuestion]);

    return(        
        <div>
            <h1>Dados do formulário:</h1>
            <p>Nome do(a) aluno(a): {testData.enteredName}</p>
            <p>Tema escolhido: {testData.choosenTheme}</p>
            <p id="question"></p>
            <ul id="options"></ul>
            <button id="btnNext" onClick={nextQuestion}></button>
        </div>
    );
};

export default Question;
