import React, { useState } from "react";
import "./songList.css";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'





export default function SongList(): JSX.Element {

    const Songs = ['song 1', 'song 2', 'song 3', 'song 4', 'song 5', 'song 6', 'song 7', 'song 8', 'song 9', 'song 10'];

    /*Hide Items*/
    function handleMouseEnter() {
        setIsShown(true);
    }
    function handleMouseLeave() {
        setIsShown(false);
    }

    const [isShown, setIsShown] = useState(false);


    return (
        <>
            <div className="Songlist">
                {Songs.map(Song =>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <ListItemIcon>
                                    <Avatar></Avatar>
                                </ListItemIcon>
                                {isShown == true &&
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faPlayCircle} />
                                    </ListItemIcon>
                                }
                                <ListItemText primary={Song} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                )}
            </div>
        </>
    );
}