import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    color: PropTypes.string
};

function ColorBox(props) {
    const [color, setColor] = useState('white')

    return (
        <div>
            {color}
            <button onClick={() => setColor('black')}>Change color black</button>
            <button onClick={() => setColor('white')}>Change color white</button>
        </div>
    );
}

export default ColorBox;