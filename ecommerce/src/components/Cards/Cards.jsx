import styles from './Cards.module.css'
import {BsCartPlus} from 'react-icons/bs'
//import propTypes from "prop-types"

import photo from '../../img/iphone2.jpg'

const Cards = ({image, price, details}) => {
    
    return (                
        <section className={styles.container_cards}>                       
            <img src={image} alt="card" className={styles.card} />
            <div className={styles.info}>
                <h2 className={styles.preco}>{price}</h2>
                <h2 className={styles.details}>{details}</h2>
                
            </div>
            <button type='button' className={styles.button_add}><BsCartPlus /></button>
            
        </section>
    )   
}

export default Cards

