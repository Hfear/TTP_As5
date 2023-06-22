import { useState } from 'react';


 export default function Square({ value, onSquareClick }) {
    
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
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