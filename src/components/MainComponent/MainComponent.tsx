import { Container, Typography, Grid } from '@material-ui/core';
import React from 'react';
// import MessageComponent from './MessageComponent/MessageComponent';
import MessageContainer from './MessageComponent/MessageContainer';
import SideBarContainer from './SideBarComponent/SideBarContainer'


const MainComponent: React.FC = () => {

    return (
        <Container maxWidth="lg">
            <Grid container direction="row" >
                <Grid item>
                    <SideBarContainer />
                </Grid>
                <Grid item>
                    <Typography variant="h2">Main Page</Typography>
                    <MessageContainer />
                </Grid>
            </Grid>

        </Container>

    );
}

export default MainComponent;