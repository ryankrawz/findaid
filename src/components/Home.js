import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import css from './Home.module.css';
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
                <input className={css.search} type="search" placeholder="Search title, location, description..." onInput={e => handleSearch(e)}/>
                <div className={css.checkboxContainer}>
                    <div className={css.checkboxItem}>
                        <input type="checkbox" name="resources-info" value="resourcesInfo" onInput={e => handleCheckbox(e)}/>
                        <label className={css.checkboxLabel} htmlFor="resources-info">has resources or information</label>
                    </div>
                    <div className={css.checkboxItem}>
                        <input type="checkbox" name="funds-petitions" value="fundsPetitions" onInput={e => handleCheckbox(e)}/>
                        <label className={css.checkboxLabel} htmlFor="funds-petitions">has funds or petitions</label>
                    </div>
                    <div className={css.checkboxItem}>
                        <input type="checkbox" name="events" value="events" onInput={e => handleCheckbox(e)}/>
                        <label className={css.checkboxLabel} htmlFor="events">has events</label>
                    </div>
                </div>
            </section>

            <section id="post-container">
                {posts.map(post => (
                    <div key={post.id} className={css.postContainer}>
                        <div className={css.itemHeader}>
                            <i class={`far fa-bookmark ${css.bookmark}`}></i>
                            <div className={css.itemTitle}>
                                <h2>{post.title}</h2>
                                <h3>{post.location}</h3>
                            </div>
                        </div>
                        <div className={css.infoContainer}>
                            <img class={css.postImage} src={publicUrl(post.images[0])} alt={post.title}/>
                            <p className={css.description}>{post.description}</p>
                        </div>
                        <Link className={css.learnMore} to={`/${post.id}`}>
                            <button>Learn More</button>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Home;
