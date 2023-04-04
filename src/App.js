import { useState } from "react";
import AddNumber from "./components/AddNumber";
import GetList from "./components/GetList";
import Header from "./components/Header";

function App() {
  const [megaList, setMegalist] = useState([]);

  const addNumberHandler = (uNumber) => {
    setMegalist((prevMegaList) => {
      return [
        ...prevMegaList,
        {num: uNumber, id: Math.random().toString()},
      ];
    });
   }; console.log(megaList);

  return (
    <div>
    <Header></Header>
    <AddNumber onAddNumber={addNumberHandler}></AddNumber>
    <GetList numbers={megaList}></GetList>
    </div>
  );
}

export default App;
