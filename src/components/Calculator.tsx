//css
import styles from "../styles/components/Calculator.module.css";

import { useState } from "react";

export default function Calculator() {
  const [valueNoteOne, setValueNoteOne] = useState(" ");
  const [valueNoteTwo, setValueNoteTwo] = useState(" ");
  const [valueNoteAttitudinal, setValueNoteAttitudinal] = useState(" ");

  const [isCalculeted, setIsCalculeted] = useState(false);
  const [average, setAverage] = useState(0);
  const [isUpAverage, setIsUpAverage] = useState("#246769");

  let noteOne = Number(valueNoteOne);
  let noteTwo = Number(valueNoteTwo);
  let noteAttitudinal = Number(valueNoteAttitudinal);

  function calculateAverage() {
    if (
      noteOne < 0 ||
      noteOne > 10 ||
      noteTwo < 0 ||
      noteTwo > 10 ||
      noteAttitudinal < 0 ||
      noteAttitudinal > 2
    ) {
      // setIsUpAverage("red");
      alert("Valor inválido!");
    } else {
      let result = ((noteOne + noteTwo) / 2) * 0.8 + noteAttitudinal;
      setAverage(Number(result.toFixed(2)));

      if (result < 6) {
        setIsUpAverage("#ff635e");
      } else {
        setIsUpAverage("#246769");
      }

      setIsCalculeted(true);
    }
  }

  function closeModal() {
    setValueNoteOne(" ");
    setValueNoteTwo(" ");
    setValueNoteAttitudinal(" ");
    setIsCalculeted(false);
  }

  return (
    <>
      {isCalculeted ? (
        <div className={styles.container}>
          <section>
            <h2>Calculif</h2>
            <p>Sua média é</p>
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
            <p>Descubra sua média do bimestre.</p>
            <div className={styles.bar}></div>
            <input
              type="number"
              onChange={(e) => setValueNoteOne(e.target.value)}
              placeholder="Primeira nota"
            />
            <input
              type="number"
              onChange={(e) => setValueNoteTwo(e.target.value)}
              placeholder="Segunda nota"
            />
            <input
              type="number"
              onChange={(e) => setValueNoteAttitudinal(e.target.value)}
              placeholder="Atitudinal"
            />
            <button onClick={calculateAverage}>Calcular</button>
          </section>
        </div>
      )}
    </>
  );
}
