import React, {useState} from "react";
import {FormControl, Input, InputLabel} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


export default function NewPassFields(props: any) {


  // if (password != repeatPassword) {
  //   console.log("Password mismatch: " + password + " / " + repeatPassword)
  // }

  return (
    <>
      <Grid item>
      <FormControl>
        <InputLabel htmlFor="newPassInput">New Password</InputLabel>
        <Input
          type="password"
          id="passwordInput"
          value={props.password}
          inputProps={{
            minLength: 8,
            maxLength: 30,
          }}
          onChange={props.onChangePass}
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
          value={props.repeatPassword}
          inputProps={{
            minLength: 8,
            maxLength: 30,
          }}
          onChange={props.onChangeRepeatPass}
          placeholder="confirm your password"
          required
        />
      </FormControl>
      </Grid>
    </>
  )
}
