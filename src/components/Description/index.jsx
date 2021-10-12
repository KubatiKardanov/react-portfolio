import React from "react";
import styles from './Description.module.scss';
import { Link } from "react-scroll";



function Description() {
    

    return (
        <div id='description' className={styles.wrapper}>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
            <div  className={styles.content}>
                <h1>Kubati Kardanov</h1>
                <h3>Меня зовут Кубатий Карданов. Мне 22 года и я Junior Front-end разработчик</h3>
                <div >
                    <Link className={styles.link} to="education" smooth={true} duration={500}>
                        <button className={styles.blueBtn}>Начать работу</button>
                    </Link>
                    <Link className={styles.link} to="projects" smooth={true} duration={500}>
                        <button className={styles.opacityBtn}>Мои проекты</button>
                    </Link>
                                     
                    
                </div>
            </div>
            
           
        </div>
    )
};


export default Description;