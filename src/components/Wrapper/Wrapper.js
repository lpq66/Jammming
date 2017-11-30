import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import Playlist from '../Playlist/Playlist';
import './Wrapper.css';

class Wrapper extends React.Component {

    render() {
        return (
            <div className="App-playlist">
                <Tracklist />
                <Playlist />
            </div>
        )
    }
}

export default Wrapper; 