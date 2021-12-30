import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Contact.module.css'


function Contact() {
    return (
        <div>
            <Header />
            <h1 className={styles.title}>Contact Information</h1>
            <form className={styles.formContainer}>
                <h2 className={styles.headerForForm}>Have a request for a project? Please submit your information below.</h2>
                <div className={styles.blockWrapper}>
                    <div className={styles.block}>
                        <label className={styles.label} for="firstName">First Name</label>
                        <input id="firstName" className={styles.firstName} className={styles.inputInformation} placeholder="First Name" />
                    </div>

                    <div className={styles.block}>
                        <label className={styles.label} for="lastName">Last Name</label>
                        <input id="lastName" className={styles.lastName} className={styles.inputInformation} placeholder="Last Name" />
                    </div>
                </div>

                <div className={styles.blockWrapper}>
                    <div className={styles.block}>
                        <label className={styles.label} for="phoneNumber">Phone Number</label>
                        <input id="phoneNumber" className={styles.phoneNumber} className={styles.inputInformation} placeholder="Phone Number" />
                    </div>
                    <div className={styles.block}>
                        <label className={styles.label} for="email">Email</label>
                        <input id="email" className={styles.email} className={styles.inputInformation} placeholder="Email" />
                    </div>
                </div>


                <label className={styles.label} for="information">Message</label>
                <textarea id="information" clasName={styles.information} className={styles.textInformation} placeholder="Please provide information here..."></textarea>

                <button className={styles.button}>Submit Request</button>
            </form>
            <Navbar />
            <Footer />
        </div>
    )
}

export default Contact