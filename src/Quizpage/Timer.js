// // import React from 'react';
// import React, { useState , useEffect } from 'react';
// function Timer({showScore} )  {
  
 
//     const [minutes, setMinutes] = React.useState(0)
//     const [seconds, setSeconds] = React.useState(10)
  
//     // React.useEffect(() => {
//     //   let myInterval = setInterval(() => {
//     //     if (seconds > 0) {
//     //       setSeconds(seconds - 1)
//     //     } if (seconds === 0) {
//     //       if (minutes === 0)
//     //        {
//     //         // clearInterval(myInterval)
//     //         showScore(true);
//     //       } 
         
//     //     }
//     //   }, 1000)
//     //   return () => {
//     //     clearInterval(myInterval)
//     //   }
//     // })
     

//  useEffect(() => {
      
//       // let myInterval ;
//       //   if (seconds > 0) {
//       //       console.log(seconds);
//       //    myInterval= setInterval(() =>{setSeconds( seconds - 1);

      
//       // let myInterval = setInterval(() => {
//       //     if (seconds > 0) {
//       //       setSeconds(seconds - 1)
//       //     }
//       //     if (seconds ===0){
//       //       clearInterval(myInterval)
//       //     }else{
//       //       setSeconds(59)
         
         
//       // } }, 1000)
        
//       //    if (seconds === 0) {
          
//       //       // clearInterval(myInterval)
//       //       showScore(true);
//       //     } 
         
        
      
//   //     return () => {
//   //       clearInterval(myInterval)
//   //     }
//   // },[seconds]
//     })

//   function refresh (){
//       setSeconds(5);
//   }
//   // if(seconds===0){
//   //     // setShowScore(true);
//   //     console.log('3');
//   // }    
  
//     return (
//       <React.Fragment>
//               <div className='wrapper'>
//                   { seconds === 0 ? (
//                       <React.Fragment>
//                           <div className="card">
                             
//                               <div className="cardBody">
//                                   <p className='timer-font'>  </p>
//                               </div>
//                           </div>
//                       </React.Fragment>
//                   ) : (
//                       <React.Fragment>
//                           {/* <h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1> */}
//                       </React.Fragment>
//                   )}
//               </div>
//       </React.Fragment>
//     )
//   }
  

// export default Timer ;





// import React from 'react';

// function Timer({showScore} )  {
  
//   //   const [seconds, setSeconds] = React.useState(10);
  
//   //   React.useEffect(() => {
//   //     if (seconds > 0) {
//   //       setTimeout(() => setSeconds(seconds - 1), 1000);
//   //     } else {
//   //       setSeconds('BOOOOM!');
//   //     }
//   //   });
  
//   //   return (
//   //     <div className="App">
//   //       <div>
//   //         {seconds}
//   //       </div>
        
//   //     </div>
//   //   );
//   // }
//     // const props = { initMinute = 0, initSeconds = 10 } 
//     const [minutes, setMinutes] = React.useState(0)
//     const [seconds, setSeconds] = React.useState(10)
  
//     React.useEffect(() => {
//       let myInterval = setInterval(() => {
//         if (seconds > 0) {
//           setSeconds(seconds - 1)
//         } if (seconds === 0) {
//           if (minutes === 0) {
//             // clearInterval(myInterval)
//             showScore(true);
//           } else {
//             setMinutes(minutes - 1)
//             setSeconds(59)
//           }
//         }
//       }, 1000)
//       return () => {
//         clearInterval(myInterval)
//       }
//     })
  
//     return (
//       <React.Fragment>
//               <div className='wrapper'>
//                   { minutes === 0 && seconds === 0 ? (
//                       <React.Fragment>
//                           <div className="card">
                             
//                               <div className="cardBody">
//                                   <p className='timer-font'> The End </p>
//                               </div>
//                           </div>
//                       </React.Fragment>
//                   ) : (
//                       <React.Fragment>
//                           <h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
//                       </React.Fragment>
//                   )}
//               </div>
//       </React.Fragment>
//     )
//   }
  

// export default Timer ;