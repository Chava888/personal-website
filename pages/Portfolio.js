import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Portfolio.module.css'
import CarouselTemplate from '../components/CarouselTemplate'
import Card from '../components/Card'

function Portfolio() {
    return (
        <>
            <Header />
            <h1 id={styles.title}>My Personal Projects</h1>
            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    <CarouselTemplate />
                </div>
            </div>
            <div className={styles.listOfProjects} >
                {/* <Card name={"Camp Site"} link={"Github1"} description={"awesomedoiwjedwodwedijewdwwwwwwwdonowivnriovnreiovnerovneriovnervnervnenvoe"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} /> */}
            </div>
            <Navbar />
            <Footer />
        </>
    )
}

export default Portfolio