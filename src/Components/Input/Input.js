import styles from './styles.module.scss'

export default function Input({
   value, 
   onChange, 
   autoFocus, 
   placeholder = 'Введите сообщение',
   required
   }){

   return(
      <div className={styles.input} >
         <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            required={required}
         />
      </div>
   )
}