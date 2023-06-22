import { useState } from 'react';


 export default function Square({value}) {

     return <button className="square">{value}</button>;

    //  const [value, setValue] = useState(null);


    // function handleClick()
    // {
    //         setValue('X');
    // }
   
    // return (
    //     <button
    //     className="square"
    //     onClick={handleClick}
    //     >
    //     {value}
    //   </button>
    // );
  }

// export default Square