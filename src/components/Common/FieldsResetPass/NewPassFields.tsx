import React, {useState} from "react";
import {Input, InputLabel} from "@material-ui/core";

export default function NewPassFields() {
  const [password,setPassword] = useState("");

  return (
    <>
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
    </>
  )
}
