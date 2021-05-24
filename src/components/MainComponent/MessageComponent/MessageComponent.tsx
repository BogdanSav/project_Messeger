import React from 'react';
import {Box, Typography} from '@material-ui/core';
import useChatMessage from './useChat';
function MessageComponent(){
    const [msg] = useChatMessage();
   return (
       <Box>
           <Typography variant="h3">{msg.username}</Typography>
           <Typography variant="body1">{msg.text}</Typography>
       </Box>
   );
}

export default MessageComponent;