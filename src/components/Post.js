import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';

import css from './Post.module.css';
import publicUrl from 'utils/publicUrl';
import { StoreContext } from 'contexts/StoreContext';

function Post() {
    const {posts, users} = useContext(StoreContext);
    const {postId} = useParams();
    const currentPost = posts.find(p => p.id === postId);
    const currentUser = users.find(u => u.email === currentPost.poster);
    /* Support for clicking through photos
    const currentImage = 0;
    */

    return (
        <div className={css.postContainer}>
            <aside class={css.postInfo}>
                <img className={css.postImage} src={publicUrl(currentPost.images[0])} alt={currentPost.images[0]}/>
                <h3>{currentPost.title}</h3>
                <h4>{currentPost.location}</h4>
                {currentPost.description}
                <i class={`far fa-bookmark ${css.bookmark}`}></i>
            </aside>
            <div className={css.infoContainer}>
                <section>
                    <h4>Resources &amp; Information</h4>
                    <div className={css.linkContainer}>
                        {currentPost.resourcesInfo.map(resInfo => (
                            <a key={resInfo.link} href={resInfo.link}>{resInfo.name}</a>
                        ))}
                    </div>
                    <h4>Funds &amp; Petitions</h4>
                    <div className={css.linkContainer}>
                        {currentPost.fundsPetitions.map(fundPet => (
                            <a key={fundPet.link} href={fundPet.link}>{fundPet.name}</a>
                        ))}
                    </div>
                    <h4>Events</h4>
                    <div className={css.linkContainer}>
                        {currentPost.events.map(event => (
                            <a key={event.link} href={event.link}>{event.name}</a>
                        ))}
                    </div>
                </section>
                <section>
                    <h4>Comments</h4>
                    <div>
                        {currentPost.comments.map(comment => (
                            <div key={comment.text} className={css.commentContainer}>
                                <h5>{currentUser.isSuperUser && <span><i class="fas fa-star"></i>&nbsp;</span>}{comment.user}</h5>
                                <p>{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Post;
