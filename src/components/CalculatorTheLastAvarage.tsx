//css
import styles from "../styles/components/Calculator.module.css";

import { useState } from "react";

export default function CalculatorTheLastAvarage() {
  const [valueAvarageOne, setValueAvarageOne] = useState(" ");
  const [valueAvarageTwo, setValueAvarageTwo] = useState(" ");
  const [valueAvarageThree, setValueAvarageThree] = useState(" ");

  const [isCalculeted, setIsCalculeted] = useState(false);
  const [isUpAverage, setIsUpAverage] = useState("#246769");

  const [message, setMessage] = useState("");

  let avarageOne = Number(valueAvarageOne);
  let avarageTwo = Number(valueAvarageTwo);
  let avarageThree = Number(valueAvarageThree);

  const [average, setAverage] = useState(0);
  const [theLastAverage, setTheLastAverage] = useState(0);

  function calculatorTheLastAvarage() {
    if (
      avarageOne < 0 ||
      avarageOne > 10 ||
      avarageTwo < 0 ||
      avarageTwo > 10 ||
      avarageThree < 0 ||
      avarageThree > 10
    ) {
      alert("Valor inválido!");
    } else {
      let result = (avarageOne + avarageTwo) * 2 + (avarageThree + 0) * 3;

      result = Number(result.toFixed(2));

      if (60 - result > 30) {
        setMessage("Está de PF, você precisa");
        setIsUpAverage("#ff635e");
      } else {
        setMessage("Você precisa de apenas");
        setIsUpAverage("#246769");
      }

      const n = Number((6 - result / 10).toFixed(2));

      setTheLastAverage(n);
      setIsCalculeted(true);
    }
  }

  function closeModal() {
    setValueAvarageOne(" ");
    setValueAvarageTwo(" ");
    setValueAvarageThree(" ");
    setIsCalculeted(false);
  }

  return (
    <>
      {isCalculeted ? (
        <div className={styles.container}>
          <section>
            <h2>Calculif</h2>
            <p>{message}</p>
            <div className={styles.modal}>
              <img onClick={closeModal} src="img/close.png" alt="Close" />
              <div>
                <span style={{ color: isUpAverage }}>{theLastAverage}</span>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className={styles.container}>
          <section>
            <h2>Calculif</h2>
            <p>Descubra sua média do ano.</p>
            <div className={styles.bar}></div>
            <input
              type="number"
              onChange={(e) => setValueAvarageOne(e.target.value)}
              placeholder="Média 1° Bimestre"
            />
            <input
              type="number"
              onChange={(e) => setValueAvarageTwo(e.target.value)}
              placeholder="Média 2° Bimestre"
            />
            <input
              type="number"
              onChange={(e) => setValueAvarageThree(e.target.value)}
              placeholder="Média 3° Bimestre"
            />
            <button onClick={calculatorTheLastAvarage}>Calcular</button>
          </section>
        </div>
      )}
    </>
  );
}
