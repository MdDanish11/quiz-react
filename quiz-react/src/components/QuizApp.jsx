import React, { useState } from "react";

const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "python",
    d: "Javascript",
    correct: "d",
},
{
    question: "JavaScript is an _____ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
},
{
    question: "Which of these cannot be used for a variable name in Java?",
    a: "identifier and keyword",
    b: "identifier",
    c: "keyword",
    d: "none of the above",
    correct: "c",
},
{
    question: "Which of the following methods can be used to display data in some form using JavaScript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    correct: "d",
},
]



function QuizApp(){
    const [ques,setQues] = useState("")
    const [answer,setAnswer] = useState("")

    return (
        <>
        <div>
            <h1>Quiz App</h1>
        </div>
        <div>
            const quizList = quizData.map(data,
            <li key={data.toString()}>{data}</li>
            )
            <ul>{quizList}</ul>
        </div>
        </>
        
    )
}

export default QuizApp;