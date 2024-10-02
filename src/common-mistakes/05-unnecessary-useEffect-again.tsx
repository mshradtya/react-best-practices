// one rule we should try to follow with useEffect is that:
// "use it for syncing react code with non-react code"
// the issue with this code is we are using useEffect to sync the two states

// import { useEffect, useState } from "react";

// const Form = () => {
//   const [age, setAge] = useState(0);
//   const [isValidAge, setIsValidAge] = useState(false);

//   const changeHandler = (e: any) => {
//     const val = e.target.value;
//     setAge(val);
//   };

//   useEffect(() => {
//     if (age >= 20) {
//       setIsValidAge(true);
//     } else {
//       setIsValidAge(false);
//     }
//   }, [age]);

//   return (
//     <form action="">
//       <label htmlFor="input">Enter your age: </label>
//       <input type="number" id="input" value={age} onChange={changeHandler} />
//       {!isValidAge && <span>You need to be older</span>}
//     </form>
//   );
// };

// export default Form;

// the best practice would be to just do the state syncing inside the handler itself

import { useState } from "react";

const Form = () => {
  const [age, setAge] = useState(0);
  const [isValidAge, setIsValidAge] = useState(false);

  const changeHandler = (e: any) => {
    const val = e.target.value;
    setAge(val);
    if (val >= 20) {
      setIsValidAge(true);
    } else {
      setIsValidAge(false);
    }
  };

  return (
    <form action="">
      <label htmlFor="input">Enter your age: </label>
      <input type="number" id="input" value={age} onChange={changeHandler} />
      {!isValidAge && <span>You need to be older</span>}
    </form>
  );
};

export default Form;
