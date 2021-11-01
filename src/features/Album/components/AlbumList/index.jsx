import PropTypes from 'prop-types';
import React from 'react';
import AlbumItem from '../AlbumItem';
import './style.scss';
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumList({ albumList }) {
    return (
        <div>
            <ul className="album-list">
                {albumList.map(album => (
                    <li key={album.id}>{
                        <AlbumItem album={album} />
                    }</li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;