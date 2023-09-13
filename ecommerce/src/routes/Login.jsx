import {Link} from 'react-router-dom'
import login from '../img/login.png'
import { useState } from 'react'
import styles from './Login.module.css'


const Login = () => {
    
    const [user, setUser] = useState('')
    const [pasw, setPasw] = useState('')

    function handleLogin(e){
        e.preventDefaul();
        console.log(user)
        console.log(pasw)
    }
    return (
        <form className={styles.container} onSubmit={handleLogin}>
            <h1>Faça seu Login</h1>
            <div className={styles.container_input}>
                <img src={login} alt="login" className={styles.imglogin} />
                <input type="text" placeholder="Usuario" required onChange={(e) => setUser(e.target.value)}/>
                <input type="text" placeholder="Senha" required onChange={(e) => setPasw(e.target.value)}/>
                <button type="button">Login</button>
                <Link to='/cadastrar'>Cadastre-se</Link>
            </div>
            
        </form>
    )
}

export default Login
