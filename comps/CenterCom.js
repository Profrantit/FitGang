import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Link from "next/link";
import { Typography, Divider } from "@material-ui/core";
import styles from "../styles/Center.module.css";
import CenterTop from "./CenterTop";
export default function CenterCom() {
  return (
    <>
      <Paper className={styles.centerC} variant="elevation">
        <br />
        <div>
          <h1 className={styles.overTitle}>Welcome to GangFit</h1>
          <h2 className={styles.overTitle}>Find out more below</h2>
          <hr style={{ maxWidth: "299px" }} />
        </div>
        <CenterTop />
      </Paper>
    </>
  );
}
