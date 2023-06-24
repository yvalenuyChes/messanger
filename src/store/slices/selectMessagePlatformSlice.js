import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   messanger:'Вконтакте'
}

export const messangerPlatformSlice = createSlice({
   name:'Messanger platform',
   initialState,
   reducers:{
      setPlatform: (state, action) => {
         state.messanger = action.payload
      }
   }
})

export const {setPlatform} = messangerPlatformSlice.actions

export default messangerPlatformSlice.reducer