import {configureStore} from '@reduxjs/toolkit'
import  messangerPlatformReducer from './slices/selectMessagePlatformSlice'

export const store = configureStore({
   reducer:{
      messagePlatform: messangerPlatformReducer
   }
})