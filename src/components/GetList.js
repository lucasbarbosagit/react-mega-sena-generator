import React from 'react';
import Card from './UI/Card';
import classes from './GetList.module.css';

const GetList = (props) => {
  return (
    <Card className={classes.numbers}>
      <ul>
        {props.numbers.map((number) => (
          <li key={number.id}>
            {number.num[0]}, {number.num[1]}, {number.num[2]}, {number.num[3]}, {number.num[4]}, {number.num[5]}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default GetList;
