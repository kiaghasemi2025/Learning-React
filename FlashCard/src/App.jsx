import Header from "./Header";
import Flashcard from "./Flashcard";
function App(){

  const title= 'Flash-Card';

  return(
    <>
      <Header/>
      <br />
      <br />
      <br />
      <Flashcard question="what was einstin name?" answer="Albert"/>
      <Flashcard category="Genral" question="what was Messi name?" answer="Lionel"/>
      <Flashcard category="Genral" question="what was Ronaldo name?" answer="Cristiano"/>
    </>
  )
}

export default App ;