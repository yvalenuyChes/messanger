import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'
import { setPlatform } from '../../store/slices/selectMessagePlatformSlice'

export default function Selector(){

   const dispatch = useDispatch()

   function setPlatformHandler(event){
      dispatch(setPlatform( event.target.value ))
   }

   return(
      <div>
         <select onChange={setPlatformHandler} >
            <option>Вконтакте</option>
            <option>WhatsApp</option>
            <option>Telegram</option>
            <option>SMS</option>
         </select> 
      </div>
   )
}