import React, {useState} from "react";
// import styles from "./ForgotPassword.module.scss"; // need to install "npm i react-css-modules"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import {FormControl, Input, InputLabel, Button} from "@material-ui/core";

export default function NoteWrapper() {
  console.log("forgot password rdy");
  const [email,setEmail] = useState("");

  return (
    <>
      <Container maxWidth={"md"}>
        <form>
          <Grid container direction="column" justify="space-around" alignItems="center"  spacing={4}  >
            <Grid item>
              <Typography variant="h3" align="center"> Restore password </Typography>
              <Typography variant="subtitle1" align="center"> We will send you an email where you must confirm the password reset </Typography>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="emailInput">Email</InputLabel>
                <Input type="email" id="emailInput" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="type your email here"/>
              </FormControl>
            </Grid>
            <Grid item>
              <Button type="submit" variant={"outlined"} color={"default"}>Reset the password</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
