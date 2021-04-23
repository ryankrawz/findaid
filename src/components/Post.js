import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';

import publicUrl from 'utils/publicUrl';
import { StoreContext } from 'contexts/StoreContext';

function Post() {
    const {posts, users} = useContext(StoreContext);
    const {postId} = useParams();
    const currentPost = posts.find(p => p.id === postId);
    const currentUser = users.find(u => u.email === currentPost.poster);

    return (
        <div>
            <aside>
                {currentPost.images.map(image => (
                    <img key={image} src={publicUrl(image)} alt={image}/>
                ))}
                {currentPost.title}
                {currentPost.location}
                {currentPost.description}
            </aside>
            <div>
                <section>
                    Resources &amp; Information
                    <div>
                        {currentPost.resourcesInfo.map(resInfo => (
                            <a key={resInfo.link} href={resInfo.link}>{resInfo.name}</a>
                        ))}
                    </div>
                    Funds &amp; Petitions
                    <div>
                        {currentPost.fundsPetitions.map(fundPet => (
                            <a key={fundPet.link} href={fundPet.link}>{fundPet.name}</a>
                        ))}
                    </div>
                    Events
                    <div>
                        {currentPost.events.map(event => (
                            <a key={event.link} href={event.link}>{event.name}</a>
                        ))}
                    </div>
                </section>
                <section>
                    Comments
                    <div>
                        {currentPost.comments.map(comment => (
                            <div key={comment.text}>
                            <span>{comment.user} {currentUser.isSuperUser && 'Star Icon'}</span>
                            {comment.text}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Post;
