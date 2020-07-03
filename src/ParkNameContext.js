import React, { createContext, useState } from 'react';


export const ParkNameContext = createContext()

export const ParkNameContextProvider = props => {
    const [parkName, setParkName] = useState('');

    return (
        <ParkNameContext.Provider value={[ parkName, setParkName ]}>
            {props.children}
        </ParkNameContext.Provider>
    )
}

