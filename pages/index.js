import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'



export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Main Page</h1>
      {/* <img src="/images/Davis.jpg" alt="Davis Picture" /> */}
      <Footer />
    </div>



  )
}