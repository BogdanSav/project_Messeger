import { Box, TextField, Button } from '@material-ui/core';
import React, { BaseSyntheticEvent } from 'react';
import MessageComponent from './MessageComponent';
import useChatMessage from './useChat';
import { v4 as uuid4 } from 'uuid';
import useSocket from './useSocket';

function MessageContainer() {
    const { message, changeTextMessage, emitMessage } = useSocket();
    const [messages] = useChatMessage();
    return (
        <Box>
            {
                messages.length === 0 ? <Box>Nothing to see yet</Box> :
                    <Box>
                        {messages.map((data: any) => (
                            <MessageComponent key={uuid4()} username={data.username} msg={data.text} time={data.time} />
                        ))}
                        <TextField
                            value={message}
                            onChange={(e: BaseSyntheticEvent) => { changeTextMessage(e) }}
                            variant="outlined"
                            multiline
                            rowsMax={8}
                            style={{ width: "50rem" }}
                        />
                        <Button type='button' onClick={emitMessage} disabled={message ? false : true}>Send</Button>
                    </Box>

            }
        </Box>


    );
}

export default MessageContainer;