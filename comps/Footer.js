import { Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <footer>
      <h3>Made with:</h3>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img style={{ height: "50px", margin: "30px" }} src="/react.png" />
        </Grid>
        <Grid item>
          <img style={{ height: "50px", margin: "30px" }} src="/logossss.png" />
        </Grid>
        <Grid item>
          <img style={{ height: "50px", margin: "30px" }} src="/nextlogo.png" />
        </Grid>
      </Grid>
      <h2 style={{ marginTop: "30px" }}> Copyright 2021 Axel Lorén</h2>
    </footer>
  );
};

export default Footer;
