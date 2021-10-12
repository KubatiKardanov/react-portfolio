import React from "react";
import styles from './Header.module.scss';
import { Link } from "react-scroll";


function Header() {
    return (
        <header>
            <div className={styles.wrapper}>
                <Link className={styles.link} to="description" smooth={true} duration={500}>
                    <div className={styles.navbarLeft}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="logo" width={22} height={20} />
                        <h3>Kubati</h3>
                    </div>
                </Link>
                
                
                <div className={styles.navbar}>
                    <Link className={styles.link} to="education" smooth={true} duration={500} >Образование</Link>
                    <Link className={styles.link} to="projects" smooth={true} duration={500}>Мои проекты</Link>
                </div>
                <div className={styles.navbarRight}>
                    <p>v22.6</p>
                    <a target='_blank' href="https://github.com/KubatiKardanov">GitHub</a>
                </div>            
                
            </div>
            
        </header>
    )
};


export default Header;