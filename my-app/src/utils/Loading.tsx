import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

export const Loading = () => {
    return (
        <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    );
};

