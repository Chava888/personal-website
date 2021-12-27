import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TechnologiesList from '../components/TechnologiesList'
// import CarouselSlides from '../components/CarouselSlides'
// import './node_modules/bootstrap/dist/css/bootstrap.min.css'



export default function Home() {
  return (
    <div>
      <Header />
      <TechnologiesList />
      {/* <img src="/images/Davis.jpg" alt="Davis Picture" /> */}
      {/* <CarouselSlides /> */}
      <Footer />
      <Navbar />
    </div>



  )
}