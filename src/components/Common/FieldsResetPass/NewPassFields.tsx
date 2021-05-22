import React, {useRef} from "react";
import {FormControl, Input, InputLabel, Popover} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


export default function NewPassFields(props: any) {
  const anchorElRef = useRef<HTMLBaseElement>();
  // if (props.password !== props.repeatPassword) {
  //   console.log("Password mismatch: " + props.password + " / " + props.repeatPassword)
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
          ref={anchorElRef}
        />
        <Popover
          open={props.popupState}
          onClose={()=>{props.onPopupChange(false)}}
          anchorEl={anchorElRef.current}
          anchorOrigin={{
            vertical :'bottom',
            horizontal:'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          Sorry! Your password must contain at least 8 characters, one letter, one number and also cannot contain symbols
        </Popover>
      </FormControl>
      </Grid>
    </>
  )
}
