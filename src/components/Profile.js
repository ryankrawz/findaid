import React from 'react';
import publicUrl from 'utils/publicUrl';
import { findUser, findPosts , findLikedPosts} from 'utils/find';
import PostThumbnail from './PostThumbnail';
import { Link } from 'react-router-dom';
import css from './Profile.module.css';
import { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';

function Profile() {
  let {
    posts, users, currentUser, likes
  } = useContext(StoreContext);

  var temp = 'bernie.sanders@gmail.com';
  let user = findUser(temp, users)
  let my_posts = findPosts(currentUser, posts);
  let liked_posts = findLikedPosts(currentUser,posts, likes);

  return (
    <div>

      <div class="Row">
        <div align="center" class="float-left" className={css.photo}>
          <img src={publicUrl(user.photo)} alt="Profile" />
        </div>

        <div align="center" class="float-left" className={css.user} >
          <div className={css.name}>
            {user.isSuperUser}
            <img src='assets/superuser.png' width="20" alt="superuser" />
            {user.name}</div>
          <div className={css.bio}>{user.bio}</div>
        </div>
      </div>

      <div className={css.posts}>
        Liked Posts

        <div class="grid-container">
          <div class="grid-row">
          <div class="grid-item">
            {liked_posts.map(post => (
              // <a href={`/${post.id}`}>
              <Link to={`/${post.id}`}>
                <div key={post.id}>
                  <div id="post-header">
                    {post.title}
                  </div>
                  <PostThumbnail post={post}/>
                </div>

              </Link>
            ))}
            </div>
          </div>
        </div>
       


      </div>

      <div className={css.posts}>
        My Posts

        <div class="grid-container">
          <div class="grid-row">
          <div class="grid-item">
            {my_posts.map(post => (
              <a href={`/${post.id}`}>
                <div key={post.id}>
                  <div id="post-header">
                    {post.title}
                  </div>
                  <PostThumbnail post={post}/>
                </div>

              </a>
            ))}
            </div>
          </div>
        </div>
       


      </div>

    </div>



  );



}

export default Profile;
