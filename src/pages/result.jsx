import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../assets/db";
import { TestContext } from "../context/TestContext";
import Question from "./question";

const Result = () => {

    
    const { testData } = useContext(TestContext);


    return(
        <div>
            {
                testData.questions.map((question, index) => {

                    return (
                        <div key={index}>
                            <p>{question.question}</p>
                            <ul>
                                {
                                    testData.questions[index].options.map((option, indexOption) =>
                                        {
                                            return(
                                                <li key={indexOption}>{option}</li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Result;