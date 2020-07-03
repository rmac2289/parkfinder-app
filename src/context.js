import React, { createContext, useState } from 'react';


export const ParkContext = createContext()

export const ParkContextProvider = props => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ParkContext.Provider value={[ isOpen, setIsOpen ]}>
            {props.children}
        </ParkContext.Provider>
    )
}


