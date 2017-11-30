import React from 'react';
import './Tracklist.css'
import Track from '../Track/Track'

class Tracklist extends React.Component {

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <div className="TrackList">
                    <Track />
                </div>
            </div>
        )
    }
}

export default Tracklist;