import React from "react";
import "./playlists.css";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



export default function Playlists(): JSX.Element {

    const Playlists = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
        <>
            <div className="Playlists">
                {Playlists.map(Playlist =>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={Playlist} />
                        </ListItemButton>
                    </ListItem>
                )}
            </div>
        </>
    );
}