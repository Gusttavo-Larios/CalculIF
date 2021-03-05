import Head from "next/head";

//css
import styles from "../styles/pages/Home.module.css";

//components
import Menu from "../components/Menu";
import CalculatorTheLastAvarage from "../components/CalculatorTheLastAvarage";

export default function AverageAnual() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculif | Média anual</title>
        <link rel="icon" href="/beca.ico" />
      </Head>
      <Menu />
      <CalculatorTheLastAvarage />
    </div>
  );
}
