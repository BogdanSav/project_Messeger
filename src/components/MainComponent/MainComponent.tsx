import { Button, Container, TextField, Typography, Grid } from '@material-ui/core';
import React, { BaseSyntheticEvent } from 'react';
// import MessageComponent from './MessageComponent/MessageComponent';
import MessageContainer from './MessageComponent/MessageContainer';
import SideBarContainer from './SideBarComponent/SideBarContainer'
import useSocket from './useSocket';

const MainComponent: React.FC = () => {
    const { message, changeTextMessage, emitMessage } = useSocket();
    return (
        <Container maxWidth="lg">
            <Grid container direction="row" justify="space-around">
                <Grid item> 
                    <SideBarContainer />
                </Grid>
                <Grid item>
                    <Typography variant="h2">Main Page</Typography>
                    <MessageContainer />
                    <TextField
                        value={message}
                        onChange={(e: BaseSyntheticEvent) => { changeTextMessage(e) }}
                        variant="outlined"
                        multiline
                        rowsMax={8}
                        style={{ width: "50rem" }}
                    />
                    <Button type='button' onClick={emitMessage} disabled={message ? false : true}>Send</Button>
                </Grid>
            </Grid>

        </Container>

    );
}

export default MainComponent;