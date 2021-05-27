import React,{useCallback} from 'react';
import { Grid, Typography,Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {JOIN_CHAT} from '../../../redux/actions/actions';
interface IProps {
    title: string,
    lastMsg: string,
    time?: string
}
function ChatCard({ title, lastMsg, time }: IProps) {
    const dispatch = useDispatch()
    const setChat = useCallback(()=>{
        dispatch({type: JOIN_CHAT});
   },[dispatch])
    return (
        <Grid item>
            <Box onClick={setChat}>
                <Typography variant="h4">{title}</Typography>
                <Grid container direction="row">
                    <Grid item>
                        <Typography variant="body2">{lastMsg}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{time}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}

export default ChatCard;