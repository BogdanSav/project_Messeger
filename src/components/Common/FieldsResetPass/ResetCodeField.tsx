import React, {useState} from "react";
import {FormControl, Input, InputLabel} from "@material-ui/core";

export default function ResetCodeField() {
  const [resetCode,setResetCode] = useState("");

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="resetCodeInput">Reset Code</InputLabel>
        <Input
          type="text"
          id="resetCodeInput"
          value={resetCode}
          inputProps={{
            minLength: 6,
            maxLength: 6,
          }}
          onChange={(e)=>{setResetCode(e.target.value)}}
          placeholder="Type your reset code here"
          required
        />
      </FormControl>
    </>
  )
}
