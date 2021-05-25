import React, { useEffect } from 'react';
import {Box, Typography} from '@material-ui/core';
import useChatMessage from './useChat';
import { useSelector } from 'react-redux';
import {RootState} from '../../../redux/reducers/rootReducer';
function MessageComponent({username, msg} :any){
    // const [msg] = useChatMessage();
    const arr = useSelector<RootState>(state=>state.msg);
    
   return (
       <Box>
           <Typography variant="h3">{username}</Typography>
           <Typography variant="body1">{msg}</Typography>
       </Box>
   );
}

export default MessageComponent;