// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { increment,decrement } from './counterslice'
// const App = () => {
//   const data=useSelector((state)=>state.count.cnt);
//   const dispatch=useDispatch();
//   return (
//     <div>
//       <h1>hello</h1>
//       <button onClick={()=>{dispatch(increment())}}>incre</button>
//       <h1>{data}</h1>
//       <button onClick={()=>{dispatch(decrement())}}>decre</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './counterslice'

const App = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>(state.count.cnt));
  return (
    <center>
    <div style={{ marginTop:"100px",backgroundColor:"gray",padding:"80px",width:"300px",borderRadius:"50%",border:"3px solid black"}}>
         <button style={{fontSize:"30px",backgroundColor:"black",color:"white"}}
          onClick={()=>{dispatch(increment())}}>Increment</button><br/>
       <h1 style={{backgroundColor:"red",width:"100px",marginTop:"39px"}}>{data}</h1>  <br/>
           <button style={{fontSize:"30px",backgroundColor:"black",color:"white"}}
           onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
    </center>
  )
}

export default App
