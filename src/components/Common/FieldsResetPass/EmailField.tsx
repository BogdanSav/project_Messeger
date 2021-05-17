import React, {useState} from "react";
import {FormControl, Input, InputLabel} from "@material-ui/core";

export default function EmailField() {
  const [email,setEmail] = useState("");

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="emailInput">Email</InputLabel>
        <Input
          type="email"
          id="emailInput"
          value={email}
          onChange={(e)=>{setEmail(e.target.value); console.log(e.target.value);}}
          placeholder="type your email here"
          required
        />
      </FormControl>
    </>
  )
}
