import { useState } from "react";
import AddNumber from "./components/AddNumber";
import GetList from "./components/GetList";
import Header from "./components/Header";
import { Counter } from "./components/Counter";

function App() {
  const [megaList, setMegalist] = useState([]);
  const [count, setCount] = useState(megaList.length);

  const addNumberHandler = (uNumber) => {
    setMegalist((prevMegaList) => {
      return [
        ...prevMegaList,
        {num: uNumber, id: Math.random().toString()},
      ];
    });
    setCount(megaList.length+1);
   };
  
  const handleRemove = (id) => {
    const newMega = megaList.filter((number) => number.id !== id);
    setMegalist(newMega);
    setCount(megaList.length-1);
 };

  return (
    <div>
    <Header></Header>
    <AddNumber onAddNumber={addNumberHandler}></AddNumber>
    <Counter count={count}></Counter>
    <GetList numbers={megaList} onRemove={handleRemove}></GetList>
    </div>
  );
}

export default App;