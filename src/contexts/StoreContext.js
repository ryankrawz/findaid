import React, { createContext, useState } from 'react';
import uniqueId from 'utils/uniqueId.js';
import initialStore from 'utils/initialStore';
import publicUrl from 'utils/publicUrl';


export const StoreContext = createContext();

function StoreContextProvider(props) {
    const [store, setStore] = useState(initialStore);

    const currentUserId = useState('bernie.sanders@gmail.com')[0]; 

    function addPost(images, description, title, location, recourceName,recourceLink, petitionName,petitionLink, eventName, eventLink) {
        const recources = {
            name: recourceName,
            link: recourceLink,
        }
        const recourcesArray = [];
        recourcesArray.concat(recources);

        const pretitions = {
            name : petitionName,
            link : petitionLink,
        }
        const petitionsArray = [];
        petitionsArray.concat(pretitions);

        const event = {
            name : eventName,
            link : eventLink,
        }
        const eventsArray = [];
        eventsArray.concat(event);

        const comment = {
            user : '',
            comment: '',
        }
        const commentArray = [];
        commentArray.concat(comment);

        // to add multiple images use this array
        const imageArray = [];
        imageArray.concat(images);

        const post = {
          id: uniqueId(""),
          poster: currentUserId,
          title: title,
          location: location,
          description: description,
          images: images,
          resourcesInfo: recourcesArray,
          fundsPetitions: petitionsArray,
          events: eventsArray,
          comments : commentArray,
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
