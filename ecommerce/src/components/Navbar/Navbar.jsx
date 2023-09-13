
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

//hoocks
import { useState } from 'react'

// css
import styles from './Navbar.module.css'

//img
import logo from '../../img/logo.png'

const Navbar = () => {

    const [search, setSearch] = useState('')
    
    function handleSearch (e) {
        e.preventDefault();
        
        console.log('enviou')
        console.log(search)
    }

  return (
    <nav className={styles.container} onSubmit={handleSearch} >
        <div className={styles.logo_search}>        
            <img src={logo} alt="logo" className={styles.logo} />
            <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} />
            <button ><BsSearch/></button>
        </div>
        <ul className={styles.list}>
            <li className={styles.item}><Link to='/'>Home</Link> </li>
            <li className={styles.item}><Link to='/products'>Products</Link></li> 
            <li className={styles.item}><Link to='/about'>About</Link></li>
            <li className={styles.item}><Link to='/login'>Login</Link></li>           
        </ul>        
    </nav>
  )
}

export default Navbar