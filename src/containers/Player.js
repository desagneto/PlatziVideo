import React from 'react';
import {Redirect} from 'react-router-dom';
import '../assets/styles/components/Player.css'
import {connect} from "react-redux";
import {getVideoSource} from "../actions";
import NotFound from "./NotFound";

function Player(props) {

    const {id} = props.match.params;

    const hasPlaying = Object.keys(props.playing).length > 0;

    React.useEffect(() => {
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    // ) : <Redirect to="/404/"/>;
    ) : <NotFound/>;

}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
};

const mapDispatchToProps = {
    getVideoSource,
};

// export default Player;

export default connect(mapStateToProps, mapDispatchToProps)(Player);
