import { useCount } from "../../hooks"
import { Button } from "../Button/Button"
import styles from "./ItemCard.module.css"

export const ItemCard = ({name, price, category, subCategory, urlImg, stock}) => {
  const {count,increment, decrement} = useCount(0,stock)
  
  return (
    <div className={`text-white ${styles.card}`}>
        <img src={`${urlImg}`} alt={`Imagen de ${name}`}/>
        <h2>{name}</h2>
        <h3>{category}</h3>
        <h3>{subCategory}</h3>
        <h3>Precio: {price} $</h3>
        <Button initial={count} incrementFunction={increment} decrementFunction={decrement}></Button>
        
    </div>
  )
}