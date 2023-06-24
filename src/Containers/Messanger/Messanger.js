import LinksForm from '../../Components/LinksForm/LinksForm'
import MessageForm from '../../Components/MessageForm/MessageForm'
import Selector from '../../Components/Selector/Selector'
import styles from './styles.module.scss'

export default function Messanger(){
   return(
      <div className={styles.messanger}>
         <div className={styles.messanger__container} >
            <Selector/>
            <MessageForm/>
            <LinksForm/>
         </div>
      </div>
   )
}