import React, {useRef} from "react";
import {FormControl, Input, InputLabel, Popover} from "@material-ui/core";

export default function ResetCodeField(props:any) {
  const anchorResetCodeRef = useRef<HTMLBaseElement>();

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
          ref={anchorResetCodeRef}
        />
        <Popover
          open={props.popupResetCode}
          onClose={()=>{props.onPopupResetCode(false)}}
          anchorEl={anchorResetCodeRef.current}
          anchorOrigin={{
            vertical :'bottom',
            horizontal:'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          Sorry! This field can only contain letters and numbers
        </Popover>
      </FormControl>
    </>
  )
}
