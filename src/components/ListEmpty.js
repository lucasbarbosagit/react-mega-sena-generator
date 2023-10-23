import React from 'react';
import Card from './UI/Card';
import classes from './ListEmpty.module.css';


const ListEmpty = () => {
  return (
    <Card className={classes.numbers}>
      <ul>
        <li>  
            <p>Bem vindo ao Mega Sena Generator, Faça uma aposta clicando em "Gerar Aposta" para começar. Boa Sorte!</p>
        </li>
      </ul>
    </Card>
  );
};

export default ListEmpty;