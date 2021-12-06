import Link from "next/link"
import styles from './navbar.module.css'


function Navbar() {
    return (
        <div className={styles.container}>

            <div id={styles.name}> Salvador Portfolio</div>

            <ul className={styles.nav}>
                <li className={styles.labels}>
                    <Link href="/">
                        <a className={styles.navbarAnchors}>Home</a>
                    </Link>
                </li>
                <li className={styles.labels}>
                    <Link href="/About">
                        <a className={styles.navbarAnchors}>About</a>
                    </Link>
                </li>
                <li className={styles.labels}>
                    <Link href="/Portfolio">
                        <a className={styles.navbarAnchors}>Portfolio</a>
                    </Link>
                </li>
                <li className={styles.labels}>
                    <Link href="/Blog">
                        <a className={styles.navbarAnchors}>Blog</a>
                    </Link>
                </li>
                <li className={styles.labels}>
                    <Link href="/Contact">
                        <a className={styles.navbarAnchors}>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar