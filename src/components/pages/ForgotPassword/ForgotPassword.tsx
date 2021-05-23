import React from "react";
import styles from "./ForgotPassword.module.css"; // need to install "npm i react-css-modules"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import {Button} from "@material-ui/core";
//imports all components
import useForgotPasswordData from "./useForgotPasswordData";
import {EmailField, ResetCodeField, NewPassFields} from "../../index";

export default function ForgotPassword() {
  const [pageNum,handlePageNum,email,handleEmail,resetCode,handleResetCode,password,
    handlePassword,repeatPassword,handleRepeatPassword,onSubmit,popupResetCode,setPopupResetCode,
    popupPassState,setPopupPassState,popupPassMismatch,setPopupPassMismatch]: any = useForgotPasswordData();

  //changing component with input which showing right now
  let inputElement;
  if (pageNum === 1) {
    inputElement = <EmailField email={email} onChange={handleEmail}/>
  } else if (pageNum === 2) {
    inputElement =
      <ResetCodeField
        resetCode={resetCode}
        onChange={handleResetCode}
        popupResetCode={popupResetCode}
        onPopupResetCode={setPopupResetCode}
      />
  } else if (pageNum === 3) {
    inputElement =
      <NewPassFields
        password={password}
        onChangePass={handlePassword}
        repeatPassword={repeatPassword}
        onChangeRepeatPass={handleRepeatPassword}
        popupPassState={popupPassState}
        onPopupChange={setPopupPassState}
        popupPassMismatch={popupPassMismatch}
        onPopupPassMismatch={setPopupPassMismatch}
      />
  } else if (pageNum === 4) {
    inputElement = (
      <>
        <br/>
        <Typography variant="subtitle1" align="center">
          Password change request was successfully sent. You will be redirected to the "Sign In" page in a few seconds
        </Typography>
      </>
    )
  }

  return (
    <>
      <Container maxWidth={"md"}>
        <form onSubmit={onSubmit}>
          <Grid container direction="column" justify="space-around" alignItems="center"  spacing={4}  >
            <Grid item>
              <Typography variant="h3" align="center"> Restore password </Typography>
              <Typography variant="subtitle1" align="center"> We will send an email with a password reset confirmation code </Typography>
            </Grid>
            <Grid item>
              <p className={styles.pageStatusBar}>Step {pageNum}</p>
              <br/>
              {inputElement} {/*rendering input field*/}
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant={"outlined"}
                color={"default"}>
                Next Step
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
