import React from 'react';

import classes from './Card2.module.css';

const Card2 = (props) => {
  return <div className={`${classes.card2} ${props.className}`}>{props.children}</div>;
};

export default Card2;