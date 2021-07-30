import { Grid, Link } from "@material-ui/core";
import styles from "../styles/Center.module.css";

export default function CenterTop() {
  return (
    <>
      <div className="content">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={6} style={{ textAlign: "center" }}>
            <h3 className={styles.text}>Inside Workouts</h3>
            <p>For when you get bored at home or at the office :)</p>
            <Link href="/insideWorkouts">
              <a className={styles.link}>Inside Workouts</a>
            </Link>
            <br />
          </Grid>
          <Grid item xs={12} lg={6}>
            <img className={styles.img} src="/inside.jpg" />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={6} style={{ textAlign: "center" }}>
            <h3 className={styles.text}>Outside Workouts</h3>
            <p>Some quick ones for your break!</p>
            <Link href="/outsideWorkouts">
              <a className={styles.link}>Outside Workouts</a>
            </Link>
            <br />
            <br />
          </Grid>
          <Grid item lg={6}>
            <img className={styles.img} src="/outside.jpg" />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={6} style={{ textAlign: "center" }}>
            <h3 className={styles.text}>I Like Food</h3>
            <p>some quick tips and tricks for a better diet</p>
            <Link href="/cooking">
              <a className={styles.link}>Some Cooking Options</a>
            </Link>
            <br />
          </Grid>
          <Grid item lg={6}>
            <img className={styles.img} src="/cooking2.jpg" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
