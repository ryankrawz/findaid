import React, { createContext, useState } from 'react';
import uniqueId from 'utils/uniqueId.js';
import initialStore from 'utils/initialStore';

export const StoreContext = createContext();

function StoreContextProvider(props) {
    // const store = useState(initialStore)[0];
    const [store, setStore] = useState(initialStore);

    const [currentUserId, setCurrentUserId] = useState('bernie.sanders@gmail.com'); 


    function addPost(images, description, title, location) {
        const post = {
          id: uniqueId("post"),
          poster: currentUserId,
          title,
          location,
          description,
          images,
          datetime: new Date().toISOString()
        };
        setStore({
            ...store,
            posts: store.posts.concat(post)
          });
    }


	return (
        <StoreContext.Provider value={{...store, addPost}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
