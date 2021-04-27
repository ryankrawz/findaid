import React from 'react';
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

      <div class="Row">
        <div align="center" className={css.photo}>
          <img src={publicUrl(user.photo)} alt="Profile" />
        </div>

        <div align="center" class="float-left" className={css.user} >
          <div className={css.name}>
            {user.isSuperUser}
            

           <h1> <img src='assets/superuser.png' width="30" alt="superuser" />{user.name}</h1></div>
          <div className={css.bio}>{user.bio}</div>
        </div>
      </div>
<hr></hr>
      
        <h2 align="center" >
        BookMarked Posts
        </h2>
        <div className={css.posts}>
        <div class="grid-container">
          <div className={css.infoContainer} class="grid-row">

            <div>

              {liked_posts.map(post => (
                <div className={css.postContainer}>
                  <a href={`/${post.id}`}>
                    <div key={post.id}>
                      <div className={css.itemheader} id="post-header">
                        {post.title}
                      </div>
                      <img class={css.postImage} src={publicUrl(post.images[0])} alt={post.title} />
                    </div>

                  </a>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

<hr></hr>
<h2 align="center" >
        My Posts
        </h2>
      <div className={css.posts}>
      

        <div class="grid-container">
          <div className={css.infoContainer} class="grid-row">

            <div >

              {my_posts.map(post => (
                <div className={css.postContainer}>
                  <a href={`/${post.id}`}>
                    <div key={post.id}>
                      <div className={css.itemheader} id="post-header">
                        {post.title}
                      </div>
                      <img class={css.postImage} src={publicUrl(post.images[0])} alt={post.title} />
                    </div>

                  </a>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

    </div>



  );



}

export default Profile;
