import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';

import css from './Post.module.css';
import publicUrl from 'utils/publicUrl';
import { StoreContext } from 'contexts/StoreContext';

function Post() {
    const {posts, users, likes, addLike, removeLike} = useContext(StoreContext);
    const {postId} = useParams();
    const currentPost = posts.find(p => p.id === postId);
    const currentUser = users.find(u => u.email === currentPost.poster);
    // Implement photo scroll
    const currentImage = 0;

    function handleLike() {
        addLike(postId);
    }

    function handleUnlike() {
        removeLike(postId);
    }

    return (
        <div className={css.postContainer}>
            <aside className={css.postInfo}>
                <img className={css.postImage} src={publicUrl(currentPost.images[currentImage])} alt={currentPost.images[currentImage]}/>
                <h3>{currentPost.title}</h3>
                <h4>{currentPost.location}</h4>
                {currentPost.description}
                {likes.find(like => like.postId === postId && like.userEmail === currentUser.email) ?
                    <i className={`fas fa-bookmark ${css.bookmark}`} onClick={handleUnlike}></i> :
                    <i className={`far fa-bookmark ${css.bookmark}`} onClick={handleLike}></i>
                }
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
                                <h5>{currentUser.isSuperUser && <span><i className="fas fa-star"></i>&nbsp;</span>}{comment.user}</h5>
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
