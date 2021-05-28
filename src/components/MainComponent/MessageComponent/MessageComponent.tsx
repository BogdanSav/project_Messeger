import React from 'react';
import {Box, Typography} from '@material-ui/core';

function MessageComponent ({username, msg, time} :any){
   return (
       <Box>
           <Typography variant="body1"><b>{`${username} ${time}`}</b></Typography>
           <Typography variant="body2">{msg}</Typography>
       </Box>
   );
}

export default MessageComponent;