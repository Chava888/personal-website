import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/About.module.css'


function About() {
    return (
        <>
            <Header />
            <div className={styles.aboutContainer}>
                <h1 id={styles.title}>About Page</h1>
                <div className={styles.profile}>
                    <div id={styles.photoContainer}>
                        <div id={styles.image}>
                            <img src="..." alt="Personal Photo" />
                        </div>
                        <h1 id={styles.title}>Salvador Tena</h1>
                    </div>
                    <div id={styles.aboutContent}>
                        <p>Here is about me!</p>
                    </div>
                </div>
                <div>
                    <p>Lorem Lorem</p>
                </div>

            </div>
            <Navbar />
            <Footer />
        </>
    )
}

export default About