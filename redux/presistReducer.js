import { createSlice } from '@reduxjs/toolkit';
const persistSlice = createSlice({
    name: 'persist',
    initialState:{
     isUserLoggedIn:false,
     email:''
    },
    reducers: {
      saveLoggedIn(state, action) {
         state.isUserLoggedIn=action.payload
      },
      saveUserData(state,action){
        state.email=action.payload
      }
    },
  })
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = persistSlice
  // Extract and export each action creator by name
  export const { saveLoggedIn,saveUserData } = actions
  // Export the reducer, either as a default or named export
  export default reducer