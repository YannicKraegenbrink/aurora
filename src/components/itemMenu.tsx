import React from "react";
import "./itemMenu.css";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



export default function ItemMenu(): JSX.Element {

    const Menus = ['Songs', 'Albums', 'Artists', 'Genres', 'Settings', 'About'];

    return (
        <>
            <div className="ItemMenu">
                {Menus.map(Menu =>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={Menu} />
                        </ListItemButton>
                    </ListItem>
                )}
            </div>
        </>
    );
}