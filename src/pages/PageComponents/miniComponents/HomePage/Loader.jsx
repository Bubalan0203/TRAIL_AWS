import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader = () => (
    <div>
        <Audio height="100" width="100" color="red" ariaLabel="Loading" />
    </div>
);

export default Loader;