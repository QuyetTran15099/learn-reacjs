import React from 'react';
import AlbumList from '../components/AlbumList';


AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nam Thần Nhạc Việt",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/3/f/6/03f6061acf6f24bcd09700d8c952a01f.jpg"
        },
        {
            id: 2,
            name: "Nam Thần Nhạc Việt",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/3/f/6/03f6061acf6f24bcd09700d8c952a01f.jpg"

        },
        {
            id: 3,
            name: "Nam Thần Nhạc Việt",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/3/f/6/03f6061acf6f24bcd09700d8c952a01f.jpg"

        },
        
    ];
    return (
        <div>
            <h2>Nhac hay</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;