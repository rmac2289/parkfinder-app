import React, { createContext, useState } from 'react';

export const ParkContext = createContext();

export const ParkContextProvider = props => {
    const [park, setPark] = useState(null);

    return (
        <ParkContext.Provider value={[ park, setPark ]}>
            {props.children}
        </ParkContext.Provider>
    )
};