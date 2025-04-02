import React, { useState } from "react";
import classes from "./AddNumber.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import CountUp from "react-countup";

const AddNumber = (props) => {
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6]);

  // Função para buscar números aleatórios quânticos da API ANU QRNG
  async function getQuantumNumbers() {
    try {
      const response = await fetch(
        "https://qrng.anu.edu.au/API/jsonI.php?length=6&type=uint8"
      );
      const data = await response.json();

      if (!data.success) {
        throw new Error("Erro ao obter números quânticos");
      }

      // Converte os números para o intervalo de 1 a 60 e evita repetições
      const randSet = new Set();
      while (randSet.size < 6) {
        const numero = (data.data[randSet.size] % 60) + 1;
        randSet.add(numero);
      }

      const randNum = Array.from(randSet).sort((a, b) => a - b);
      setNum(randNum);
      props.onAddNumber(randNum);
    } catch (error) {
      console.error("Falha ao gerar números quânticos:", error);
    }
  }

  return (
    <div>
      <div className={classes.cardsitems}>
        {num.map((n, index) => (
          <CountUp key={index} start={0} end={n} delay={0}>
            {({ countUpRef }) => (
              <div>
                <Card className={classes.numberMega}>
                  <span ref={countUpRef} />
                </Card>
              </div>
            )}
          </CountUp>
        ))}
      </div>

      <div className={classes.buttonMega}>
        <Button onClick={getQuantumNumbers}>Gerar Aposta Quântica</Button>
      </div>
    </div>
  );
};

export default AddNumber;
