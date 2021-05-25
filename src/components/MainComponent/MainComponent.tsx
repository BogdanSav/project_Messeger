import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { BaseSyntheticEvent } from 'react';
import MessageComponent from './MessageComponent/MessageComponent';
import MessageContainer from './MessageComponent/MessageContainer';
import useSocket from './useSocket';

const MainComponent: React.FC = () => {
    const {message,changeTextMessage ,emitMessage} = useSocket();
    return (
        <Container maxWidth="md">
             <Typography variant="h2">Main Page</Typography>
             <MessageContainer/>
            <TextField
                value = {message}
                onChange = {(e: BaseSyntheticEvent)=>{changeTextMessage(e)}}
                variant="outlined"
                multiline
                rowsMax={8}
                style={{width:"50rem"}}
            />
            <Button type='button' onClick={emitMessage}>Send</Button>
        </Container>
           
    );
}

export default MainComponent;