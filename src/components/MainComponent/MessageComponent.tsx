import React from 'react';
import useSocket from './useSocket';
import {Box, Typography} from '@material-ui/core';
function MessageComponent(){
    const [msg] = useSocket();
   return (
       <Box>
           <Typography variant="h3">{msg.username}</Typography>
           <Typography variant="body1">{msg.text}</Typography>
       </Box>
   );
}

export default MessageComponent;