import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";

export default function index() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Why go outside?</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6}>
          <ul>
            <h2>Upper body Option</h2>
            <li>
              a) push-ups - 10 (use knee push-ups or do wide, close, regular
              hand placement)
            </li>
            <li>
              b) reverse push-ups - 20 (lift your hands off the floor - flexing
              upper back)
            </li>
            <li>
              c) Birds - 20 (lift arms up and down as if you were flying like a
              bird)
            </li>
            <li>d) Chair dips - 10-20</li>
            <Image width={300} height={300} src="/upperbody.jpeg" />
          </ul>
        </Grid>
        <Grid item lg={6}>
          <ul>
            <h2>Crunches / Plank Pose</h2>
            <li>
              a) Regular Crunch - 20 (just lift shoulder blades off of floor)
            </li>
            <li>b) Reverse Crunch - 20 (just lift hips off of floor)</li>
            <li>
              c) Double Crunch - 20 (Lift both hips and shoulder blades off of
              floor)
            </li>
            <li>d) Left Crunch - 20 (Right elbow to the left knee)</li>
            <Image alt="abs" width={300} height={300} src="/abs.jpg" />
          </ul>
        </Grid>
      </Grid>
    </>
  );
}
