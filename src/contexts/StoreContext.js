import React, { createContext, useState } from 'react';

import initialStore from 'utils/initialStore';

export const StoreContext = createContext();

function StoreContextProvider(props) {
    const store = useState(initialStore)[0];

	return (
        <StoreContext.Provider value={{...store}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
