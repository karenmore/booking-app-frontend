import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const hotelSlice = createSlice({
    name: 'hotels',
    initialState: null,
    reducers: {
        setHotelsG: (state, action) => action.payload
    }
})

export const {setHotelsG } = hotelSlice.actions

export default hotelSlice.reducer

export const getHotelsThunk = (url) => (dispatch) => {
    axios.get(url)
    .then(res => dispatch(setHotelsG(res.data)))
    .catch(err => console.log(err))   
}