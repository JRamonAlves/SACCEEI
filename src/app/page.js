"use client";
import Formulario from "./formulario/formulario";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.app}>
        <header className={styles.appheader}>
          <h1>
            Formulario do SACCEEI{" "}
            <img src="../ufcglogo.png" alt="" width="70px" />
          </h1>
        </header>
        <main>
          <Formulario />
        </main>
      </div>
    </>
  );
}
