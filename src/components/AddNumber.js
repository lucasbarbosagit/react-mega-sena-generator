import React, { useState } from "react";
import classes from './AddNumber.module.css';
import Button from "./UI/Button";
import Card from "./UI/Card";

const AddNumber = (props) => {
 const [num,setNum] = useState([1,2,3,4,5,6]);

   function getNumber() {
      const number = Math.floor(Math.random() * (60 - 1 + 1) + 1);
      return number;
   }

   function getNumbers() {
    const max = 60;
    const quantity = 6;
    const randSet = new Set();
    while(randSet.size < quantity) {
      randSet.add(Math.floor(Math.random() * max) + 1);
    }
    let randNum = Array.from(randSet);
    setNum(randNum);
    props.onAddNumber(randNum);
  }

  return (
    <div>
    <div className={classes.cardsitems}>
   <Card className={classes.numberMega}>{num[0]}</Card>
   <Card className={classes.numberMega}>{num[1]}</Card>
   <Card className={classes.numberMega}>{num[2]}</Card>
   <Card className={classes.numberMega}>{num[3]}</Card>
   <Card className={classes.numberMega}>{num[4]}</Card>
   <Card className={classes.numberMega}>{num[5]}</Card>
   </div>
   <div className={classes.buttonMega}>
   <Button onClick={getNumbers}>Gerar Números</Button>
   <Button onClick={getNumbers}>Gerar Números por Quadrante</Button>
   </div>
   </div>
  );
};

export default AddNumber;