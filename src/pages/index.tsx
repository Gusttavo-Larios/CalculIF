import Head from "next/head";

//css
import styles from "../styles/pages/Home.module.css";

//components
import Menu from "../components/Menu";
import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculif | Home</title>
        <link rel="icon" href="/beca.ico" />
      </Head>
      <Menu />
      <Calculator />
    </div>
  );
}
