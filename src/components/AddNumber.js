import React, { useState } from "react";
import classes from './AddNumber.module.css';
import Button from "./UI/Button";
import Card from "./UI/Card";

const AddNumber = (props) => {
 const [num,setNum] = useState('');

   function getNumber() {
      const number = Math.floor(Math.random() * (60 - 1 + 1) + 1);
    return number;
   }
 
   const getNumbers = () => {
    setNum([getNumber(),getNumber(),getNumber(),getNumber(),getNumber(),getNumber()]);
   // console.log(num);
    props.onAddNumber(num);
   // setNum('');
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
   <Button onClick={getNumbers}>gerar numeros</Button>
   </div>
   </div>
  );
};

export default AddNumber;