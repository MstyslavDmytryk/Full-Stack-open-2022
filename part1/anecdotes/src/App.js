import { useState } from "react";

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(0)

  const points = { 0: 1, 1: 3, 2: 4, 3: 2 }

  // create vote functionality

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
   
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {vote} votes</p>
      <Button text="vote" />
      <Button onClick={randomAnecdote} text="next anecdote" />
    </div>
  );
};

export default App;
