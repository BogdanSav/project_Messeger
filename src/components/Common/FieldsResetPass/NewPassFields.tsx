import React, {useState} from "react";
import {FormControl, Input, InputLabel} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


export default function NewPassFields() {
  const [password,setPassword] = useState("");
  const [repeatPassword,setRepeatPassword] = useState("");

  if (password != repeatPassword) {
    console.log("Password mismatch: " + password + " / " + repeatPassword)
  }

  return (
    <>
      <Grid item>
      <FormControl>
        <InputLabel htmlFor="newPassInput">New Password</InputLabel>
        <Input
          type="password"
          id="passwordInput"
          value={password}
          inputProps={{
            minLength: 8,
            maxLength: 30,
          }}
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder="type your password here"
          required
        />
      </FormControl>
      </Grid>

      {/*there is no check if the fields match*/}
      <Grid item>
      <FormControl>
        <InputLabel htmlFor="repeatPassword">Repeat Password</InputLabel>
        <Input
          type="password"
          id="repeatPasswordInput"
          value={repeatPassword}
          inputProps={{
            minLength: 8,
            maxLength: 30,
          }}
          onChange={(e)=>{setRepeatPassword(e.target.value)}}
          placeholder="confirm your password"
          required
        />
      </FormControl>
      </Grid>
    </>
  )
}
