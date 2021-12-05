import Link from "next/link"
import styles from './navbar.module.css'


function Navbar() {
    return (
        <div className={styles.container}>

            <div id={styles.name}> Salvador Portfolio</div>

            <ul className={styles.nav}>
                <li className={styles.labels}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.labels}>
                    <Link href="/About">
                        <a>About</a>
                    </Link>
                </li>
                <li className={styles.labels}>
                    <Link href="/Portfolio">
                        <a>Portfolio</a>
                    </Link>
                </li>
                <li className={styles.labels}>
                    <Link href="/Blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li className={styles.labels}>
                    <Link href="/Contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar