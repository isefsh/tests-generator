import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../assets/db";
import { TestContext } from "../context/TestContext";

const Question = () => {

    const { testData } = useContext(TestContext);
    const { saveTestData } = useContext(TestContext);
    const [indexQuestion, setIndexQuestion] = useState(0);
    const userAnswers = useRef({}); // armazenamento dos objetos em uma variavel de referência, não causa renderização dos componentes

    const navigate = useNavigate();

    const nextQuestion = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked'); // armazena na variavel a opção selecionada pelo usuário
        
        if(indexQuestion === testData.questions.length -1){ //verifica se o usuário chegou ao final do teste
            const test = { testData: userAnswers.current }; //cria um objeto onde o atributo testData armazena um array com as questões, id da resposta correta e a resposta do usuario
            const newTestData = Object.assign(testData, test); //cria um  novo objeto com os dados armazenado no contexto e no objeto test
            saveTestData(newTestData); //atualiza os dados armazenados no contexto
            console.log(newTestData);   
            navigate('/result');
        }else{
            setIndexQuestion(indexQuestion + 1); //
        }
        if(selectedOption) {
            userAnswers.current[indexQuestion] = {
                question: testData.questions[indexQuestion].question,
                userAnswer: selectedOption.value,
                rightAnswer: testData.questions[indexQuestion].rightAnswer
            };
            console.log(userAnswers.current);
        }
    } 

    useEffect(() => {
        const questionData = testData.questions[indexQuestion];
        const questionText = document.getElementById('question');
        const questionOptions = document.getElementById('options');
        const btnNext = document.getElementById('btnNext');

        questionOptions.innerHTML = ''; // Remove as opções antigas antes de adicionar as novas

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
