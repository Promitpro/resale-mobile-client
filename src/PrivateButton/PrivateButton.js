import React from 'react';

const PrivateButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-black">{children}</button>
    );
};

export default PrivateButton;