import { configureStore } from "@reduxjs/toolkit";
import hotels from './states/hotels.state'

export default configureStore({
    reducer: {
        hotels
    }
})