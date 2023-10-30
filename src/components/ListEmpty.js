import React from 'react';
import classes from './ListEmpty.module.css';
import Card2 from './UI/Card2';


const ListEmpty = () => {
  return (
    <Card2 className={classes.numbers}>
      <ul>
        <li>  
            <p>Bem vindo ao Mega Sena Generator, Faça uma aposta clicando em "Gerar Aposta" para começar. Boa Sorte!</p>
        </li>
      </ul>
    </Card2>
  );
};

export default ListEmpty;