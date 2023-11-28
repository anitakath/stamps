import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name:"cards",
    initialState: {
        cards: [],
        dates: [2020, 2021, 2022, 2023, 2024]
    },
    reducers:{
        addCard: (state, action) => {
            console.log(state)
            console.log(action.payload)
            state.cards.push(action.payload)
        },
        removeCard: (state, action) =>{
            state.objects = state.objects.filter((o) => o !== action.payload)
        }

    }
})

export const {addCard, removeCard} = cardsSlice.actions;
export default cardsSlice.reducer;