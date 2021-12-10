import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <div>
            <footer className={styles.container}>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="far fa-copyright">2021</i>
            </footer>
        </div>
    )
}

export default Footer