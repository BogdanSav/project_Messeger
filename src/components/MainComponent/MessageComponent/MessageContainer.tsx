import { Box } from '@material-ui/core';
import React, {useEffect, useState } from 'react';
import MessageComponent from './MessageComponent';
import useChatMessage from './useChat';
// import { useSelector } from 'react-redux';

function MessageContainer() {
    const [messages] = useChatMessage();
    return (
        messages.length ===0 ? <Box>Nothing to see yet</Box> :
        messages.map((data: any) => (
            <MessageComponent username={data.username} msg={data.text} />
        ))
        
    );
}

export default MessageContainer; 