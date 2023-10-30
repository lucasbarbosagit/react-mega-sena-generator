import React from 'react';
import Card2 from './UI/Card2';
import classes from './GetList.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const GetList = (props) => {
  return (
    <div className={classes.numbers}>
      <ul>
        {props.numbers.map((number) => (
         <li key={number.id} className={classes.deletebtnlink}>
            {number.num[0]} - {number.num[1]} - {number.num[2]} - {number.num[3]} - {number.num[4]} - {number.num[5]}
                <div>
                <EditIcon className={classes.editbtn} onClick={() => props.onEdit(number.id)}></EditIcon>
                <DeleteIcon className={classes.deletebtn} onClick={() => props.onRemove(number.id)}></DeleteIcon>
                </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetList;