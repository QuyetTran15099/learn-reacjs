import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Album.propTypes = {
    album: PropTypes.object.isRequired
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album__thumnail">
                <img  alt={album.name} src={album.thumbnailUrl} />
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default Album;