// // useFetch.ts
// import { useState, useEffect } from "react";

// export const useFetch = (func, args) => {
//   // Response state
//   const [data, setData] = useState();

//   useEffect(async () => {
//     try {
//       // Fetch data from REST API
//       const response = await func(...args);

//       if (response.status === 200) {
//         // Extract json
       
//         setData(response);
//       } else {
//         console.error(`Error ${response.status} ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error(`Error ${error}`);
//     }
//   }, []);

//   return data;
// };
