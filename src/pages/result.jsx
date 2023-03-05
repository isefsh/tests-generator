import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../assets/db";
import { TestContext } from "../context/TestContext";

const Result = () => {

    
    const { testData } = useContext(TestContext);
    
    return(
        <div>Result{console.log(testData)}</div>
    );
};

export default Result;