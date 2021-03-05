//css
import styles from "../styles/components/CalculatorAvarageYear.module.css";

import { useState } from "react";

export default function CalculatorAvarageYear() {
  const [valueAvarageOne, setValueAvarageOne] = useState(" ");
  const [valueAvarageTwo, setValueAvarageTwo] = useState(" ");
  const [valueAvarageThree, setValueAvarageThree] = useState(" ");
  const [valueAvarageFour, setValueAvarageFour] = useState(" ");

  const [isCalculeted, setIsCalculeted] = useState(false);
  const [average, setAverage] = useState(0);
  const [isUpAverage, setIsUpAverage] = useState("#246769");

  const [message, setMessage] = useState("");

  let avarageOne = Number(valueAvarageOne);
  let avarageTwo = Number(valueAvarageTwo);
  let avarageThree = Number(valueAvarageThree);
  let avarageFour = Number(valueAvarageFour);

  function calculateAverageYear() {
    if (
      avarageOne < 0 ||
      avarageOne > 10 ||
      avarageTwo < 0 ||
      avarageTwo > 10 ||
      avarageThree < 0 ||
      avarageThree > 10 ||
      avarageFour < 0 ||
      avarageFour > 10
    ) {
      alert("Valor inválido!");
    } else {
      let result =
        ((avarageOne + avarageTwo) * 2 + (avarageThree + avarageFour) * 3) / 10;

      setAverage(Number(result.toFixed(2)));

      if (result < 6) {
        setMessage("Você reprovou");
        setIsUpAverage("#ff635e");
      } else {
        setMessage("Você passou de ano");
        setIsUpAverage("#246769");
      }

      setIsCalculeted(true);
    }
  }

  function closeModal() {
    setValueAvarageOne(" ");
    setValueAvarageTwo(" ");
    setValueAvarageThree(" ");
    setValueAvarageFour(" ");
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
                <span style={{ color: isUpAverage }}>{average}</span>
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
            <input
              type="number"
              onChange={(e) => setValueAvarageFour(e.target.value)}
              placeholder="Média 4° Bimestre"
            />
            <button onClick={calculateAverageYear}>Calcular</button>
          </section>
        </div>
      )}
    </>
  );
}
