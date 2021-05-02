import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Post.module.css';
import publicUrl from 'utils/publicUrl';
import { StoreContext } from 'contexts/StoreContext';

function Post() {
    const {posts, users, likes, addComment, addLike, removeLike} = useContext(StoreContext);
    const [currentImage, setCurrentImage] = useState(0);
    const [comment, setComment] = useState('');
    const {postId} = useParams();
    const currentPost = posts.find(p => p.id === postId);
    const currentUser = users.find(u => u.email === currentPost.poster);

    function handleLike() {
        addLike(postId);
    }

    function handleNextImage() {
        const nextImage = currentImage < currentPost.images.length - 1 ? currentImage + 1 : 0;
        setCurrentImage(nextImage);
    }

    function handlePrevImage() {
        const nextImage = currentImage > 0 ? currentImage - 1 : currentPost.images.length - 1;
        setCurrentImage(nextImage);
    }

    function handleSubmitComment(event) {
        addComment(comment, currentPost.id);
        setComment('');
        event.preventDefault();
    }

    function handleUnlike() {
        removeLike(postId);
    }

    return (
        <div className={css.postContainer}>
            <aside className={css.postInfo}>
                <img className={css.postImage} src={publicUrl(currentPost.images[currentImage])} alt={currentPost.images[currentImage]}/>
                <div className={css.scrollContainer}>
                    <i className={`fas fa-chevron-left ${css.scrollPhoto}`} onClick={handlePrevImage}></i>
                    &nbsp;&nbsp;
                    <i className={`fas fa-chevron-right ${css.scrollPhoto}`} onClick={handleNextImage}></i>
                </div>
                <h3 className={css.postTitle}>{currentPost.title}</h3>
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
                                <h5>{users.find(user => user.email === comment.user).isSuperUser &&
                                    <span><i className="fas fa-star"></i>&nbsp;</span>
                                }
                                {comment.user}</h5>
                                <p>{comment.text}</p>
                            </div>
                        ))}
                        <form className={css.addComment} onSubmit={handleSubmitComment}>
                            <input type="text" placeholder="Add a comment…" value={comment} onChange={e => setComment(e.target.value)}/>
                            {comment ?
                                <button type="submit">Post</button> :
                                <button type="submit" disabled>Post</button>
                            }
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Post;
