// import { configureStore } from "@reduxjs/toolkit";
// import countReducer from "./counterslice"
// const store=configureStore({
//     reducer:{
//         count:countReducer
//     }
// })
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterslice"
const store=configureStore({
    reducer:{
      count:countReducer
    }
})
export default store;