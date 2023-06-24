import { useState } from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import Button from '../Button/Button'
import Input from '../Input/Input'


export default function MessageForm(){

   const platformName = useSelector(state => state.messagePlatform.messanger)
  

   const [showInputMessage, setShowInputMessage] = useState(false)
   const [showInputQuickAnswer, setShowInputQuickAnswer] = useState(false)

   const [shortAnswerInput, setShortAnswerInput] = useState()

   function shortAnswerInputHandler(event){
      setShortAnswerInput(event.target.value)
   }

   function addShortAnswerHandler(){
      const answer = shortAnswerInput.trim()
      let uniq =  Date.now()
      let platform = JSON.parse(localStorage.getItem(`${platformName}`))
      
      platform = {...platform, [uniq]:`${answer}` }
      
      const newData = JSON.stringify(platform)

      localStorage.setItem(`${platformName}`, `${newData}`)
      setShortAnswerInput('')
      setShowInputQuickAnswer(false)
   }


   return(
      <div className={styles.container}>
         <div className={styles.message_form}>
            <div className={styles.message_form__title} >
               <h2>
                  {platformName}
               </h2>
            </div>
            <div>
               <Input placeholder='Номер телефона' />
            </div>
            <div className={styles.message_form__text}>
               <div>
                 <Button
                  text={showInputMessage ? 'Закрыть поле ввода текста' : 'Открыть поле ввода текста'}
                  onClick={() => setShowInputMessage(prev => !prev)}
                 />
               </div>
               {
                  showInputMessage
                  ?
                  <>
                  <Input
                     autoFocus={true}
                  />
                  <div className={styles.message_form__quick_answers} >
                     <Button
                     text={'Отправить сообщение'}
                     width='170px'
                     />
                  </div>
                  <div className={styles.message_form__quick_answers} >
                  <h3>Кнопки для быстрого ответа</h3>
                     {
                        localStorage.getItem(`${platformName}`) !== null
                        ?
                        <div className={styles.message_form__quick_answers_list} >
                           {
                              
                              Object.entries(JSON.parse(localStorage.getItem(`${platformName}`)))
                              .map((answer, key) => {

                                 return <div key={key} >
                                    <Button text={answer[1]} />
                                 </div>
                                
                              })
                           }
                        </div>
                        : 
                        <div>
                           
                           Кнопки быстрого ответа не добавлены
                        </div>
                        
                     }
                  </div>
                  </>
                  :
                  <>
                  <div className={styles.message_form__quick_answers} >
                  <h3>Кнопки для быстрого ответа</h3>
                  {
                        localStorage.getItem(`${platformName}`) !== null
                        ?
                        <div>
                           {
                              
                              Object.entries(JSON.parse(localStorage.getItem(`${platformName}`)))
                              .map((answer, key) => {

                                 return <div key={key} >
                                    <Button text={answer[1]} />
                                 </div>
                                
                              })
                           }
                        </div>
                        : 
                        <div>
                           
                           Кнопки быстрого ответа не добавлены
                        </div>
                        
                     }
                  </div>
                  </>
               }
            </div>
            <div  className={styles.message_form__add_quick_answers_button}>
               <div onClick={() => setShowInputQuickAnswer(prev => !prev)} >
                  <Button
                     text={'Добавить быстрый ответ'}

                  />
               </div>
               {
                  showInputQuickAnswer
                  ? 
                  <div>
                     <Input
                     value={shortAnswerInput}
                     onChange={shortAnswerInputHandler}
                     autoFocus={true}
                     />
                     <Button
                        text={'Добавить'}
                        onClick={addShortAnswerHandler}
                     />
                  </div>
                  
                  :
                  null
               }
            </div>
         </div>
      </div>
   )
}

