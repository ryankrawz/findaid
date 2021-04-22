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
        posts, users, currentUserId
     } = useContext(StoreContext);
     const {posts:allPosts} = useContext(StoreContext);
     const email = params.email ? params.email : currentUserEmail;
     const posts = findPosts(userId, allPosts);
     let liked_events= events.filter(f=> f.likes.userEmail == email);
     let my_posts= events.filter(f=> f.events.poster == email);
    return ( <div>
      <header className={css.header}>
        <div className={css.photo}>
          <img src={publicUrl(user.photo)} alt="Profile" />
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
