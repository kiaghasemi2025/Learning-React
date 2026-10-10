// import {useState} from 'react' ;


function Flashcard ({category="General" , question="?" , answer="...."}) {

    return (
        <div className="card">
            <h1>{category}</h1>
            <p>{question}</p>
            <p>{answer}</p> 
        </div>
    )
}


export default Flashcard