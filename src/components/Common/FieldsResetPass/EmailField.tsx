import React from "react";
import {FormControl, Input, InputLabel} from "@material-ui/core";

export default function EmailField(props: any) {
  // function handleChange(e: any) {
  //   props.onChange(e.target.value);
  // }

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="emailInput">Email</InputLabel>
        <Input
          type="email"
          id="emailInput"
          value={props.email}
          onChange={props.onChange}
          placeholder="type your email here"
          required
        />
      </FormControl>
    </>
  )
}
