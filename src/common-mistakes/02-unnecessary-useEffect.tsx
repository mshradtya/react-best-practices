// component that displays the number of characters that is being typed in the input field

// import { useState, useEffect } from "react";

// const UnnecessaryUseEffect = () => {
//   const [value, setValue] = useState("");
//   const [chars, setChars] = useState(0);

//   useEffect(() => {
//     setChars(value.length);
//   }, [value]);

//   console.log("rendered");

//   return (
//     <div>
//       <h3>Char count: {chars}</h3>
//       <input value={value} onChange={(e) => setValue(e.target.value)} />
//     </div>
//   );
// };

// export default UnnecessaryUseEffect;

// the above code works, but it's still expensive because
// every time value changes, useEffect is run that re-renders the component ( "rendered" logging twice )
// the second re-render is just useless.

// a better way is to access the value and store it in a local prop

import { useState } from "react";

const UnnecessaryUseEffect = () => {
  const [value, setValue] = useState("");
  const chars = value.length;

  console.log("rendered");

  return (
    <div>
      <h3>Char count: {chars}</h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default UnnecessaryUseEffect;
