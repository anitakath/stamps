import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cardData: [],
    dates: [2020, 2021, 2022, 2023, 2024],
    loadedCardData: false,
  },
  reducers: {
    addCard: (state, action) => {
      state.cardData.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cardData = state.cardData.filter((card) => card !== action.payload);
    },
    setCardData: (state, action) => {
      state.cardData = action.payload;
      //console.log(action.payload);
      state.loadedCardData = true;
      console.log(state.cards);
    },
  },
});

export const {addCard, removeCard, setCardData} = cardsSlice.actions;


export const fetchCards = () => async (dispatch) =>{
  const res = await fetch("/api/cards");
  const data = await res.json();
  dispatch(setCardData(data));
}

export const selectCards = (state) => state.cards.cardData;

export default cardsSlice.reducer;