import React, { createContext, useState } from 'react';


export const ActivityContext = createContext()

export const ActivityContextProvider = props => {
    const [showActivities, setShowActivities] = useState(false);

    return (
        <ActivityContext.Provider value={[ showActivities, setShowActivities ]}>
            {props.children}
        </ActivityContext.Provider>
    )
}


