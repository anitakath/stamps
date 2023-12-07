import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        createUser: (state, action)=>{
            return action.payload;
        }
    }
})

export const {createUser} = userSlice.actions;

export default userSlice.reducer;
