import React from 'react';
import classes from './Counter.module.css';

export const Counter = (props) => {
  
  return (
    <div className={classes.counter}>
      <p>Número de Apostas:{props.count}</p>
    </div>
  )
}