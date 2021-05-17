import React, {useState} from "react";
import styles from "./ForgotPassword.module.css"; // need to install "npm i react-css-modules"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import {FormControl, Button} from "@material-ui/core";
//imports all components
import {EmailField, ResetCodeField, NewPassFields} from "../../index";

export default function ForgotPassword() {
  console.log("forgot password component ready!");
  const [page, setPage] = useState("firstPage"); //number of current step page
  const [pageNum, setPageNum] = useState(1);
  const [inputElement, setInputElement] = useState(<EmailField />);


  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("form submitted");

    //changing content when form submitted successfully
    if (page === "firstPage"){
      setInputElement(<ResetCodeField />);
      setPage("secondPage");
      setPageNum(2);
      console.log("secondPage showing")
    } else if (page === "secondPage") {
      setInputElement(<NewPassFields />);
      setPage("thirdPage");
      setPageNum(3);
      console.log("thirdPage showing")
    } else if (page === "thirdPage") {
      window.location.reload()
    }
  }

  return (
    <>
      <Container maxWidth={"md"}>
        <form onSubmit={handleSubmit}>
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
