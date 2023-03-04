import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { TestContext } from "../context/TestContext";
import { createArrayRandom } from "./createArrayRandom";
import { db } from "./db";


const themes = db.themes;

const FormData = () => {    
    
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const { saveTestData } = useContext(TestContext);

    
    const onSubmit = (data) => {
        
        const list = createArrayRandom.createArray(data.choosenTheme);
        const listObject = { indexQuestions: list };
        const testData = Object.assign(data, listObject);
        saveTestData(testData);
        navigate('/question');
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nameInput">
            Nome do(a) aluno(a):
            <input type="text"  id="nameInput" {...register("enteredName")} />
            </label>
            <fieldset>
                <legend>Escolha um dos temas abaixo:</legend> 
                {
                    themes.map((theme, index) => (
                        <div key={index}>
                            <label htmlFor={theme.name}>
                                {theme.name}
                                <input type="radio" {...register("choosenTheme")} value={theme.name} />
                            </label>
                        </div>
                    ))
                }
            </fieldset>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormData;