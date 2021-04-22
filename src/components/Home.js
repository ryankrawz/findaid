import React, { useContext, useState } from 'react';

import publicUrl from 'utils/publicUrl';
import { StoreContext } from 'contexts/StoreContext';

function Home() {
    const {posts: allPosts} = useContext(StoreContext);
    const [posts, setPosts] = useState(allPosts);
    const [filters, setFilters] = useState({
        resourcesInfo: false,
        fundsPetitions: false,
        events: false
    });

    function handleCheckbox(event) {
        const currentFilter = event.target.value;
        const newFilters = {
            ...filters,
            [currentFilter]: event.target.checked
        };
        setFilters(newFilters);
        const filteredPosts = allPosts.filter(post => {
            return (
                (!newFilters.resourcesInfo || post.resourcesInfo.length > 0) &&
                (!newFilters.fundsPetitions || post.fundsPetitions.length > 0) &&
                (!newFilters.events || post.events.length > 0)
            );
        });
        setPosts(filteredPosts);
    }

    function handleSearch(event) {
        const searchExp = RegExp(`${event.target.value}`, 'i');
        const searchedPosts = allPosts.filter(post => {
            return searchExp.test(post.title) || searchExp.test(post.location) || searchExp.test(post.description);
        });
        setPosts(searchedPosts);
    }

    return (
        <div>
            <section id="filter-container">
                <input type="search" placeholder="Search title, location, description..." onInput={e => handleSearch(e)}/>
                <div id="checkbox-container">
                    <input type="checkbox" name="resources-info" value="resourcesInfo" onInput={e => handleCheckbox(e)}/>
                    <label htmlFor="resources-info">has resources or information</label>
                    <input type="checkbox" name="funds-petitions" value="fundsPetitions" onInput={e => handleCheckbox(e)}/>
                    <label htmlFor="funds-petitions">has funds or petitions</label>
                    <input type="checkbox" name="events" value="events" onInput={e => handleCheckbox(e)}/>
                    <label htmlFor="events">has events</label>
                </div>
            </section>

            <section id="post-container">
                {posts.map(post => (
                    <div key={post.id}>
                        <button>Like</button>
                        <div id="post-header">
                            {post.title}
                            {post.location}
                        </div>
                        <button>Learn More</button>
                        <img src={publicUrl(post.images[0])}/>
                        {post.description}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Home;
