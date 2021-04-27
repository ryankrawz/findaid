import React, { createContext, useState } from 'react';
import uniqueId from 'utils/uniqueId.js';
import initialStore from 'utils/initialStore';

export const StoreContext = createContext();

function StoreContextProvider(props) {
    const [store, setStore] = useState(initialStore);

    const currentUserId = useState('bernie.sanders@gmail.com')[0]; 

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

    function addLike(postId) {
        const newLike = {
            datetime: new Date().toISOString(),
            postId,
            userEmail: currentUserId
        }

        setStore({
            ...store,
            likes: store.likes.concat(newLike)
        })
    }

    function removeLike(postId) {
        setStore({
            ...store,
            likes: store.likes.filter(like => !(like.postId === postId && like.userEmail === currentUserId))
        })
    }

	return (
        <StoreContext.Provider value={{...store, addPost, addLike, removeLike}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
