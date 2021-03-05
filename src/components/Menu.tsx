//next and react
import Link from "next/link";
import { useEffect, useState } from "react";

//css
import styles from "../styles/components/Menu.module.css";

export default function Menu() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      {width > 1080 ? (
        <div className={styles.container}>
          <div>
            <Link href="/">
              <span>Nota do bimestre</span>
            </Link>
            <Link href="theLastAvarage">
              <span>Média necessária no último bimestre</span>
            </Link>
            <Link href="/averageYear">
              <span>Média anual</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div>
            <Link href="/">
              <span>Nota do bimestre</span>
            </Link>
            <Link href="/theLastAvarage">
              <span>Média no último bimestre</span>
            </Link>
            <Link href="/averageYear">
              <span>Média anual</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
