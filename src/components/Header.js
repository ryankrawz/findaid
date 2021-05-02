import React from 'react';
import css from './Header.module.css';
import publicUrl from 'utils/publicUrl';
import {
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className={css.header}>
            <div className={css.headerItem}>
                <Link to="/">
                    <img src={publicUrl('/assets/home.svg')} alt="Home"/>
                </Link>
            </div>
            <div className={css.headerItem}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <strong>FindAid</strong>
                &nbsp;
                <img className={css.logo} src={publicUrl('/findaidlogo.png')} alt="FindAid logo" width="35px" height="35px"/>
                </Link>
            </div>
            <div className={css.headerItem}>
                <Link to="createpost">
                    <img src={publicUrl('/assets/createpost.svg')} alt="CreatePost"/>
                </Link>
            </div>
            <div className={css.headerItem}>
                <Link to="profile">
                    <img src={publicUrl('/assets/profile.svg')} alt="Profile"/>
                </Link>
            </div>

        </div>
    );
}

export default Header;
