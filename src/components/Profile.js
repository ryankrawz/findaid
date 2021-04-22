import React from 'react';
import publicUrl from 'utils/publicUrl';
import {findUser, findPosts} from 'utils/find';
import PostThumbnail from './PostThumbnail';
import { Link, useParams } from 'react-router-dom';
import css from './Profile.module.css';
import { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import { Redirect } from "react-router-dom";
function Profile(props) {
    const params = useParams();
    let {
        store, posts, users, currentUser
     } = useContext(StoreContext);
     
     var user = 'bernie.sanders@gmail.com';
     const {posts:allPosts} = useContext(StoreContext);
     const email = params.email ? params.email : currentUser;
     console.log(user);
     let liked_events= posts.filter(f=> f.userEmail == currentUser);
     let my_posts= posts.filter(f=> f.poster == currentUser);
    return ( <div>
      <header className={css.header}>
        <div className={css.photo}>
          
        </div>
    
        
      </header>
      <div className={css.user}>
        <div className={css.name}>{user.name}</div>
        <div className={css.bio}>{user.bio}</div>
      </div>
        
        <div className={css.posts}>
        Events Started
      {my_posts.map(p => (
                    <Link key={p.id} to={`/${p.id}`}>
                        <PostThumbnail post={p}/>
                    </Link>
                ))}
      </div>
      <div className={css.posts}>
        Liked Events 
      {liked_events.map(p => (
                    <Link key={p.id} to={`/${p.id}`}>
                        <PostThumbnail post={p}/>
                    </Link>
                ))}
      </div>
    </div>
  );
      
          
    
}

export default Profile;
