import React from 'react';
import {Box, Typography} from '@material-ui/core';

function MessageComponent ({username, msg} :any){
   return (
       <Box>
           <Typography variant="h3">{username}</Typography>
           <Typography variant="body1">{msg}</Typography>
       </Box>
   );
}

export default MessageComponent;