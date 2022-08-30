import React from 'react';

//Gif
import spenner from '../gif/spinner.gif';

const Loader = () => {
    return (
        <div>
            <img src={spenner} alt='loading' />
        </div>
    );
};

export default Loader;