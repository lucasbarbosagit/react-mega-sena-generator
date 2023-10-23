import React, { useState } from "react";
import classes from './AddNumber.module.css';
import Button from "./UI/Button";
import Card from "./UI/Card";
import CountUp from 'react-countup';

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
    <CountUp start={0} end={num[0]} delay={0}>
      {({ countUpRef}) => (
      <div>
        <Card className={classes.numberMega}>
          <span ref={countUpRef} />
        </Card>
      </div>
     )}
   </CountUp>
   <CountUp start={0} end={num[1]} delay={0}>
      {({ countUpRef}) => (
      <div>
        <Card className={classes.numberMega}>
          <span ref={countUpRef} />
        </Card>
      </div>
     )}
   </CountUp>
   <CountUp start={0} end={num[2]} delay={0}>
      {({ countUpRef}) => (
      <div>
        <Card className={classes.numberMega}>
          <span ref={countUpRef} />
        </Card>
      </div>
     )}
   </CountUp>
   <CountUp start={0} end={num[3]} delay={0}>
      {({ countUpRef}) => (
      <div>
        <Card className={classes.numberMega}>
          <span ref={countUpRef} />
        </Card>
      </div>
     )}
   </CountUp>
   <CountUp start={0} end={num[4]} delay={0}>
      {({ countUpRef}) => (
      <div>
        <Card className={classes.numberMega}>
          <span ref={countUpRef} />
        </Card>
      </div>
     )}
   </CountUp>
   <CountUp start={0} end={num[5]} delay={0}>
      {({ countUpRef}) => (
      <div>
        <Card className={classes.numberMega}>
          <span ref={countUpRef} />
        </Card>
      </div>
     )}
   </CountUp>
   </div>
   
   <div className={classes.buttonMega}>
   <Button onClick={getNumbers}>Gerar Aposta</Button>
   <Button onClick={getNumbers}>Gerar Aposta por Quadrante</Button>
   </div>
   </div>
  );
};

export default AddNumber;