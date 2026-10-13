import { useState } from 'react';


function Flashcard({ category = "General", question = "?", answer = "...." }) {

    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className="card" onClick={() => setIsFlipped(!isFlipped)}>
            <h1 className='category'>{category}</h1>
            <h3>{!isFlipped ? question : ''}</h3>
            <h4>{isFlipped ? answer : ''}</h4>
        </div>
    )
}


export default Flashcard 