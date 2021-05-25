import React from 'react';
import {Box, Typography} from '@material-ui/core';
// import useChatMessage from './useChat';

function MessageComponent({username, msg} :any){
    // const [msg] = useChatMessage();
    
   return (
       <Box>
           <Typography variant="h3">{username}</Typography>
           <Typography variant="body1">{msg}</Typography>
       </Box>
   );
}

export default MessageComponent;