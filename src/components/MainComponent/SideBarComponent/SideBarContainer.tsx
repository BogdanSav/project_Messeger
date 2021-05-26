import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
// import './SideBarContainer.scss';
import useChatInfo from './useChatInfo';
import ChatCard from './ChatCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';

function SidebarContainer() {
    const chatInfo = useSelector<RootState>(state => state.chats);
    const [state, setState] = useState<any>([]);
    useEffect(() => {
        setState(chatInfo);
    }, [chatInfo]);
    return (

        <Grid container className="sidebar-container" direction="column">
            {
                state.map((chat: any) => (
                    <ChatCard title={chat.title} lastMsg={chat.lastMsg} />
                ))
            }
        </Grid>

    );
}
export default SidebarContainer;