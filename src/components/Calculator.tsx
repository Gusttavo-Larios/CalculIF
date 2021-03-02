//css
import styles from "../styles/components/Calculator.module.css";

import { useState } from "react";

export default function Calculator() {
  const [valueNoteOne, setValueNoteOne] = useState(" ");
  const [valueNoteTwo, setValueNoteTwo] = useState(" ");
  const [valueNoteAttitudinal, setValueNoteAttitudinal] = useState(" ");

  const [isCalculeted, setIsCalculeted] = useState(false);
  const [average, setAverage] = useState(0);

  function calculateAverage() {
    let result =
      ((Number(valueNoteOne) + Number(valueNoteTwo)) / 2) * 0.8 +
      Number(valueNoteAttitudinal);
    setAverage(Number(result.toFixed(2)));
    setIsCalculeted(true);
  }

  function closeModal() {
    setIsCalculeted(false);
  }

  return (
    <div className={styles.container}>
      <section>
        <h2>Calculif</h2>
        {isCalculeted ? (
          <>
            <p>Sua média é</p>
            <div className={styles.modal}>
              <img onClick={closeModal} src="img/close.png" alt="Close" />
              <div>
                <span>{average}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <p>Descubra sua média do bimestre.</p>
            <div className={styles.bar}></div>
            <input
              type="text"
              onChange={(e) => setValueNoteOne(e.target.value)}
              placeholder="Primeira nota"
            />
            <input
              type="text"
              onChange={(e) => setValueNoteTwo(e.target.value)}
              placeholder="Segunda nota"
            />
            <input
              type="text"
              onChange={(e) => setValueNoteAttitudinal(e.target.value)}
              placeholder="Atitudinal"
            />
            <button onClick={calculateAverage}>Calcular</button>
          </>
        )}
      </section>
    </div>
  );
}
