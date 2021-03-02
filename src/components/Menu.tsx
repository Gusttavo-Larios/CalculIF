//next and react
import Link from "next/link";

//css
import styles from "../styles/components/Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div>
        <span>Nota do bimestre</span>
        <span>Média necessário no último bimestre</span>
        <span>Média anual</span>
      </div>
    </div>
  );
}
