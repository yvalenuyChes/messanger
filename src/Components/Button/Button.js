import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

export default function Button({text, onClick, width = '200px', type}){

   const messanger = useSelector(state => state.messagePlatform.messanger)

   return(
      <div className={styles.button__container} >
       <button 
        onClick={onClick}
        className={styles.button + ' ' + styles[messanger]}
        style={{width:width}}
        type={type}
       >
         {text}
       </button>  
      </div>
   )
}