import styles from './technologiesList.module.css'




function TechnologiesList() {
    return (

        <div className={styles.container}>
            <div className={styles.technologies} id={styles.html5}>
                <i className="fab fa-html5 fa-8x"></i>
            </div>
            <div className={styles.technologies} id={styles.css3}>
                <i className="fab fa-css3-alt fa-8x"></i>
            </div>
            <div className={styles.technologies} id={styles.js}>
                <i className="fab fa-js fa-8x"></i>
            </div>
            <div className={styles.technologies} id={styles.react}>
                <i className="fab fa-react fa-8x"></i>
            </div>
            <div className={styles.technologies} id={styles.nodejs}>
                <i className="fab fa-node fa-8x"></i>
            </div>
            <div className={styles.technologies} id={styles.ruby}>
                <i className="far fa-gem fa-8x "></i>
            </div>
            <div className={styles.technologies} id={styles.bootstrap}>
                <i className="fab fa-bootstrap fa-8x"></i>
            </div>
            <div className={styles.technologies} id={styles.github}>
                <i className="fab fa-github fa-8x"></i>
            </div>
        </div>

    )
}

export default TechnologiesList;