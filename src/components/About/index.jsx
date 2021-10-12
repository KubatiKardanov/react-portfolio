import React from "react";
import styles from './About.module.scss';
import AboutBlock from "./AboutBlock";



const aboutContent = [
    {id: 1, title: "Прикладная информатика", paragraph: 'Окончил в 2020 году бакалавриат по направлению "Прикладная информатика" в Кабардино-Балкарском государственном университете им. Х.М. Бербекова'},
    {id: 2, title: "Экономика", paragraph: 'После бакалавриата поступил в магистратуру по напралению "Экономика"'},
    {id: 3, title: "Прикладная математика и информатика", paragraph: 'Помимо экономики также поступил в магистратуру по направлению "Прикладная математика и информатика"'},
]

function About() {
    return (
        <div id='education'>
            <div className={styles.wrapper} >
                {aboutContent.map(i => 
                    <AboutBlock 
                        key={i.id} 
                        title={i.title} 
                        paragraph={i.paragraph} 
                        styles={styles}/>
                )
                }     
            </div>
            <div id='projects' className={styles.projects}>
                <div className={styles.descrtiption}>
                    <h2>React Sneakers</h2>
                    <p>Данный проект написан на Reactjs с использованием React-Router. Основан на функциональных компонентах и хуках. Есть три основных страницы: Home, Корзина, Мои закладки. Вся информация на все три страницы приходит с сервера. Для сетевых запросов используется axios. В качестве сервера выступает сервис MockAPI.</p>
                </div>
                <div className={styles.projectImage}>
                    <a target='_blank' href="https://github.com/KubatiKardanov/react-sneakers">
                        <img width={600} src="/img/ReactSneakers.png" alt="" />
                    </a>                    
                </div>
            </div>
            
            <div className={styles.projects}>
                <div className={styles.descrtiption}>
                    <h2>React Pizza</h2>
                    <p>Онлайн магазин на React + Redux. Не сильно отличается от ReactSneakers по концепции, но тут за логику отвечает Redux. Стек технологий: Reactjs, Redux, Redux-thunk, axios. </p>
                </div>
                <div className={styles.projectImage}>
                <a target='_blank' href="https://github.com/KubatiKardanov/react-pizza">
                 <img width={600} src="/img/ReactPizza.png" alt="" />
                </a>                    
                </div>
                
            </div>

            <div className={styles.projects}>
                <div className={styles.descrtiption}>
                    <h2>Crypto Converter</h2>
                    <p>Приложение написано на Reactjs + typescript, в качестве State Manager использован MobX. За UI/UX отвечает Material UI 5 версии. Сетевые запросы с помощью axios, а в качестве сервера выступает сервис CryptoCompare API. Приложение состоит из двух блоков. Один отрисовывет криптовалюты в таблицу, второй используется для их конвертации.</p>
                </div>
                <div className={styles.projectImage}>
                    <a target='_blank' href="https://github.com/KubatiKardanov/crypto-converter">
                        <img width={600} height={330} src="/img/CryptoConverter.png" alt="" />
                    </a>                    
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <h3>Контактная информация</h3>
                    <a target='_blank' href="https://t.me/kub4ti">Телеграм</a>
                    <a target='_blank' href="https://mail.ru">Почта: kkkuba34@mail.ru</a>
                    <a target='_blank' href="https://github.com/KubatiKardanov">ГитХаб</a>
                </div>
            </div>
            
        
        
        </div>
        
    )
       
};


export default About;