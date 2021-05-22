import React from "react";
import {FormControl, Input, InputLabel} from "@material-ui/core";

export default function ResetCodeField(props:any) {

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="resetCodeInput">Reset Code</InputLabel>
        <Input
          type="text"
          id="resetCodeInput"
          value={props.resetCode}
          inputProps={{
            minLength: 6,
            maxLength: 6,
          }}
          onChange={props.onChange}
          placeholder="Type your reset code here"
          required
        />
      </FormControl>
    </>
  )
}
