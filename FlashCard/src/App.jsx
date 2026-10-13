import { useState } from "react";
import Header from "./Header";
import Flashcard from "./Flashcard";


const cardsList = []


function App() {


  const [cards, setCards] = useState(cardsList);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category , setCategory] = useState("General")

  
  function addCard (event) {
      event.preventDefault();

      if(question.trim() === "" || answer.trim() === "") return ;
      const newCard = {
        id:crypto.randomUUID(), 
        category:category,
        question:question,
        answer:answer
      }

      setCards([...cards,newCard])

      setQuestion("")
      setAnswer("")

  }

  return (
    <>
      <Header />
      {cards.length === 0 && <h2>No Cards Yet...</h2>}

      <form onSubmit={addCard}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input 
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button className="Add" type="submit">Add-Card</button>
      </form>

      <br />
      {
        cards.map((card) => (
          <Flashcard
            key={card.id}
            category={card.category}
            question={card.question}
            answer={card.answer}
          />
        ))
      }

      <button className="Delete" onClick={() => setCards([])}>Clear-Cards</button>
    </>
  )
}

export default App;