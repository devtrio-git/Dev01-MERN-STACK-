import React, { createContext, useState } from 'react'


export const myContext = createContext();

export default function ContextProvider({ children }) {

    const [is_dark, setIsDark] = useState(false);

    return <myContext.Provider value={{
        is_dark,
        setIsDark,
    }}>
        {children}
    </myContext.Provider>
}

