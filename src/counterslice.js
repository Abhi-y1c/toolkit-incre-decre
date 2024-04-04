// import { createSlice } from "@reduxjs/toolkit";
// const santosh=createSlice({
//     name:'count',
//     initialState:{
//         cnt:0
//     },
//     reducers:{
//         increment:(state)=>{
//          state.cnt=state.cnt+1
//         },
//         decrement:(state)=>{
//             state.cnt=state.cnt-1
//            },
//     }
// })
// export const {increment,decrement}=santosh.actions;
// export default santosh.reducer;

import { createSlice } from "@reduxjs/toolkit";
const Pack=createSlice({
    
        name:'count',
        initialState:{
            cnt:0
        },
        reducers:{
            increment:(state)=>{
                state.cnt=state.cnt+11
            },
            decrement:(state)=>{
                state.cnt=state.cnt-11
            }
        
        }
        
    
})
export const {increment,decrement}=Pack.actions;
export default Pack.reducer;