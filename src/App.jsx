import { useState } from "react";

const text = "Bonjour tout le monde";
var style = {fontFamily : 'Century Gothic', cursor : 'pointer'};
const show = true;

const handleClick = () => {
  alert("Vous avez Cliqué");
}

function App() {

  const [count, setCount] = useState(0)

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 16
  })

  const increment = () => {
    setCount(count + 1)
  }

  const anniv = () => {
    setPerson({...person, age: person.age + 1})
  }

  return <>
    <Salutation />
    <Form color="Blue"/>
    <input type="text" value={text}/>
    <p>{count}</p>
    <button onClick={increment}>ADD</button>

    <p>Age de {person.firstName} : {person.age}</p>
    <button onClick={anniv}>Vielli</button>

  </>;
}

function Salutation () {
  return <>
    {show ? <h1 onClick={handleClick} style={style}>{text}</h1> : <p style={style}>demo</p> }
  </>
}

// eslint-disable-next-line react/prop-types
function Form ({color}) {
  return <h2 style={{color : color}}>Formulaire</h2>
}

export default App
