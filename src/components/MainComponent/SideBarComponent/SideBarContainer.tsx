import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Button, Grid, Input } from '@material-ui/core';
import {v4 as uuid4} from 'uuid';
import useChatInfo from './useChatInfo';
import ChatCard from './ChatCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';

function SidebarContainer() {
    const [name,setName,addChat] = useChatInfo();
    const chatInfo:any = useSelector<RootState>(state => state.chats);
    const [state, setState] = useState<any>([]);
    // console.log(state);
    useEffect(() => {
        setState(chatInfo.allChats);
    }, [chatInfo]);
    return (

        <Grid container className="sidebar-container" direction="column">
            <Grid item>
                <Input type="text" value={name} onChange={(e:BaseSyntheticEvent)=>{setName(e)}} />
                <Button type="button" onClick={addChat}>+</Button>
            </Grid>
            {
                state.map((chat: any) => (
                    <ChatCard key={uuid4()} title={chat.title} lastMsg={chat.lastMsg} time={chat.time} id={chat.id}/>
                ))
            }
        </Grid>

    );
}
export default SidebarContainer;