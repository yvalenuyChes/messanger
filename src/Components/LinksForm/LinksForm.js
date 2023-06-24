import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './styles.module.scss'

export default function LinksForm(){

   const [links, setLinks] = useState(null)
   const [inputNameValue, setInputNameValue] = useState('')
   const [inputLinkValue, setInputLinkValue] = useState('')
   const [update, setUpdate] = useState(null)

   useEffect(() => {
      if(localStorage.getItem('links') !== null || undefined ){
         setLinks( Object.entries(JSON.parse(localStorage.getItem('links')))) 
      }
     
   }, [update])


   function addLinkHandler(){
      const link = inputLinkValue.trim()
      let name =  inputNameValue.trim()
      let linksList = JSON.parse(localStorage.getItem('links'))
      
      linksList = {...linksList, [name]:`${link}` }
      
      const newData = JSON.stringify(linksList)

      localStorage.setItem('links', `${newData}`)
      setInputNameValue('')
      setInputLinkValue('')
      setUpdate(Date.now())
   }

   return(
      <div className={styles.links} >
         <div>
          <Input
            placeholder='Введите имя сайта'
            value={inputNameValue}
            onChange={e => setInputNameValue(e.target.value)}
            required={true}
          />
           <Input
            placeholder='Введите ссылку на него'
            value={inputLinkValue}
            required={true}
            onChange={e => setInputLinkValue(e.target.value)}
          />
         </div>
        <Button
         onClick={addLinkHandler}
         text={'Добавить ссылку'}
         type={'submit'}
        />
        <h3>Добавленные ссылки</h3>
         <div className={styles.links__list} >
            {
               links !== null || undefined 
               ?
               links.map((link, key) => {
                  return<div  key={key}>
                     <a href={`${link[1]}`}>{link[0]}</a>
                  </div>
                  
                
               })

            : <div>Ссылки не добавлены</div>
            }
         </div>
      </div>
   )
}