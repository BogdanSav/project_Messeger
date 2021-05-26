import React from 'react';
import {Grid, Typography} from '@material-ui/core';
interface IProps{
    title:string,
    lastMsg:string,
    time?: string
}
function ChatCard({title, lastMsg, time}:IProps){
   return (
       <Grid item>
        <Typography variant="caption">{title}</Typography>
        <Grid container direction="row">
            <Grid item>
                <Typography variant="body1">{lastMsg}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{time}</Typography>
            </Grid>
        </Grid>
       </Grid>
   );
}

export default ChatCard;