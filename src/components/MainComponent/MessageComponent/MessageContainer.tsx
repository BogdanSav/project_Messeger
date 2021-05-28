import { Box } from '@material-ui/core';
import React from 'react';
import MessageComponent from './MessageComponent';
import useChatMessage from './useChat';
import {v4 as uuid4} from 'uuid';

function MessageContainer() {
    const [messages] = useChatMessage();
    return (
        messages.length ===0 ? <Box>Nothing to see yet</Box> :
        messages.map((data: any) => (
            <MessageComponent key={uuid4()} username={data.username} msg={data.text} />
        ))
    );
}

export default MessageContainer; 