import React from 'react';
import './App.css';
import Playlists from './components/playlists';
import ItemMenu from './components/itemMenu';
import SongList from './components/songList';
import Player from './components/player';

import Divider from '@mui/material/Divider';

function App() {
  return (
    <>
      <div className="Main">
        <div className="Sideview">
          <ItemMenu></ItemMenu>
          <Divider></Divider>
          <Playlists></Playlists>
        </div>
        <div className="Songlist">
          <SongList></SongList>
        </div>
        <div className="Player">
          <Player></Player>
        </div>
      </div>

    </>

  );
}

export default App;
