import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import css from './App.module.css';
import StoreContextProvider from 'contexts/StoreContext';

import CreatePost from './CreatePost';
import Header from './Header';
import Home from './Home';
import LogIn from './LogIn';
import Post from './Post';
import Profile from './Profile';
import SignUp from './SignUp';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <StoreContextProvider>
                <div className={css.container}>
                    <Header/>
                    <main className={css.content}>
                        <Switch>
                            <Route path="/login">
                              <LogIn/>
                            </Route>
                            <Route path="/signup">
                              <SignUp/>
                            </Route>
                            <Route path="/createpost">
                                <CreatePost/>
                            </Route>
                            <Route path="/profile">
                                <Profile/>
                            </Route>
                            <Route path="/:postId">
                                <Post/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </StoreContextProvider>
        </Router>
    );
}

export default App;
