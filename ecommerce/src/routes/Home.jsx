
import Cards from '../components/Cards/Cards'
import Slide from '../components/Slide/Slide'

import styles from './Home.module.css'


const Home = () => {
  return (
    <section >         
       <Slide />
       <h1 className={styles.title}>Bem Vido ao nosso E-commerce</h1>   
       <div className={styles.container}> 
       <Cards  />         
       </div>
       
    </section>

  )
}

export default Home