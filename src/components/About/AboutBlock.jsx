import React from "react";


function AboutBlock({ styles, title, paragraph }) {
    return (
        <div className={styles.contentBlock}>
                <h3>{title}</h3>
                <div>
                    <p>{paragraph}</p>  
                </div>
        </div>
    )
};

export default AboutBlock;