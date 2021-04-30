import React from 'react';
import { Link } from 'react-router-dom';
import publicUrl from 'utils/publicUrl';
import { findUser, findPosts, findLikedPosts } from 'utils/find';
import css from './Profile.module.css';
import { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';


function Profile() {
  let {
    currentUser, posts, users, likes
  } = useContext(StoreContext);

  
  
  
  let user = findUser(currentUser, users);
  let my_posts = findPosts(currentUser, posts);
  let liked_posts = findLikedPosts(currentUser, posts, likes);

  return (
    <div>

      <div>
        <div align="center" className={css.photo}>
          <img src={publicUrl(user.photo)} alt="Profile" />
        </div>

        <div align="center" className={css.user} >
          <div className={css.name}>
            

           <h1>{user.isSuperUser && <span><img src='assets/superuser.png' width="30" alt="superuser"/>&nbsp;</span>}{user.name}</h1></div>
          <div className={css.bio}>{user.bio}</div>
        </div>
      </div>
<hr/>
      
        <h2 align="center" >Bookmarked Posts</h2>
          <div className={css.infoContainer}>
              {liked_posts.map(post => (
                <div className={css.postContainer}>
                  <Link key={post.id} to={`/${post.id}`} className={css.postLink}>
                    <div key={post.id}>
                          <h4>{post.title}</h4>
                          <img className={css.postImage} src={publicUrl(post.images[0])} alt={post.title} />
                    </div>
                  </Link>
                </div>
              ))}
          </div>

<hr/>
<h2 align="center">My Posts</h2>
          <div className={css.infoContainer}>
              {my_posts.map(post => (
                <div className={css.postContainer}>
                  <Link key={post.id} to={`/${post.id}`} className={css.postLink}>
                    <div key={post.id}>
                          <h4>{post.title}</h4>
                          <img className={css.postImage} src={publicUrl(post.images[0])} alt={post.title} />
                    </div>
                  </Link>
                </div>
              ))}
          </div>

    </div>



  );



}

export default Profile;
