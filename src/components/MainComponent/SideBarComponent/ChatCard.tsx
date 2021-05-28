import React,{useCallback, useState} from 'react';
import { Grid, Typography,Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { JOIN_CHAT} from '../../../redux/actions/actions';
interface IProps {
    title: string,
    lastMsg: string,
    time?: string,
    id:number
}
function ChatCard({ title, lastMsg, time, id }: IProps) {
    const dispatch = useDispatch()
    const [state,SetState] = useState(false);
    const setChat = useCallback(()=>{
        SetState(!state);
        dispatch({type: JOIN_CHAT,payload:id});
   },[dispatch,id,state])
    return (
        <Grid item>
            <Box onClick={setChat}>
                <Typography variant="h4" style={state ? {color:"red"}:{color:"black"}}>{title}</Typography>
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