import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../components/Cards/Cards'

import styles from './Products.module.css'


const Products = () => {

  const [produtos, setProdutos] = useState([])

useEffect(() => {

  fetch('http://localhost:3000/products',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
  }).then((res) => res.json())
    .then((data) => {
      setProdutos(data)      
  }).catch((error) => console.log(error))
},[])

  
  return (      
    <>
      <h1 className={styles.title}>Temos os melhores Produtos para você</h1>
      {produtos.map((item) => (
      <Cards key={item.id_produto} image={item.image} 
      price={item.price}
      details={item.title}  
      />))}
    </>
   
  )
}

export default Products