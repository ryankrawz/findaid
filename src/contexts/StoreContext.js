import React, { createContext, useEffect, useState } from 'react';

import initialStore from 'utils/initialStore';

export const StoreContext = createContext();

function StoreContextProvider(props) {
    const [store, setStore] = useState(() => {
        return JSON.parse(window.localStorage.getItem('store')) || initialStore;
    });

    useEffect(() => {
        window.localStorage.setItem('store', JSON.stringify(store));
    }, [store]);

	return (
        <StoreContext.Provider value={{...store}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
