import React from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>GangFit</h1>
          <h2 className={styles.title}>Your Gang</h2>
          <p
            style={{
              marginTop: "-10px",
              color: "white",
              fontWeight: "bold"
            }}
          >
            (*not a gang)
          </p>

          <Link href="/workouts">
            <button className={styles.heroBtn}>Start now</button>
          </Link>
        </div>

        <div className={styles.heroText}></div>
      </div>
    </>
  );
}
