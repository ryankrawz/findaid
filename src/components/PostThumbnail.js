import React from 'react';
import css from './PostThumbnail.module.css';
import publicUrl from 'utils/publicUrl';
function PostThumbnail(props) {
  console.log(props.post);
  return (
    <div className={css.square}>
      <div className={css.content}>
        <img className={css.image} src={publicUrl(props.post.images[0])} alt="Post Thumbnail"/>
      </div>
        
    </div>
  );
}

export default PostThumbnail;
