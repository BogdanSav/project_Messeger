import React from 'react';
import {Container, Grid, Typography, FormControl, Input, InputLabel, Button} from '@material-ui/core';
import useLoginData from './useLoginData';
import './styles.css'



const AnotherLogin : React.FC = ()=>{
    const [email,password,changeEmail,changePassword,onSubmit]: any = useLoginData();
   
    return(
        <Container maxWidth={"md"}>
        <form onSubmit={onSubmit}>
            <Grid container direction="column" justify="space-around" alignItems="center"  spacing={4}  >
                <Grid item>
                    <Typography variant="h3"> Log into existing account</Typography>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="emailInput">Email</InputLabel>
                        <Input type="email" id="emailInput" value={email} onChange={changeEmail} placeholder="type your email here"/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="passwordInput">Password</InputLabel>
                        <Input type="password" id="passwordInput" value={password} onChange={changePassword} placeholder="type your password here"/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button type="submit" variant={"outlined"} color={"default"}>Sign in</Button>
                </Grid>
            </Grid>
        </form>
    </Container>);
}

export default AnotherLogin;