import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, []);

    return (
        <div className="sidebar">
            <div class="sidebar_header">
                <Avatar src={user?.photoURL} />
                <div class="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>  
                </div>
            </div>
            <div class="sidebar_search">
                <div class="sidebar_searchContainer">
                <SearchOutlined />
                <input placeholder="Search " type="text" />
                </div>
            </div>
            <div class="sidebar_chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name} />
                ))}
            </div>
        </div>
    )
}


export default Sidebar
