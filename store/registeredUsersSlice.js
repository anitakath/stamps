import { createSlice } from "@reduxjs/toolkit";


const registeredUsersSlice = createSlice({
    name :'registeredUsers',
    initialState: [],
    reducers:{
        addRegisteredUser: (state, action) =>{
            state.push(action.payload)


            console.log(action.payload)
        }
    }
})


export const {addRegisteredUser} = registeredUsersSlice.actions;
export default registeredUsersSlice.reducer;