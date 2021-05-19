import { Button, Container, TextField, Typography } from '@material-ui/core';
import React from 'react';
import MessageComponent from './MessageComponent'


const MainComponent: React.FC = () => {
   
    return (
        <Container maxWidth="md">
             <Typography variant="h2">Main Page</Typography>
             <MessageComponent></MessageComponent>
            <TextField
                variant="outlined"
                multiline
                rowsMax={8}
                style={{width:"50rem"}}
            />
            <Button type='button'>Send</Button>
        </Container>
           
    );
}

export default MainComponent;