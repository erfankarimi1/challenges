import Counter from "./components/Counter";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddPeople(){
    setPeople(people + 1)

  }
  function handleSubstractPeople(){
    setPeople(people - 1)
  }
    return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
      onAddPeople = {handleAddPeople}
      onSubstractPeople = {handleSubstractPeople}
       />
      <p>You are going to reserve a table for {people} People.</p>
    </div>
  );
}
