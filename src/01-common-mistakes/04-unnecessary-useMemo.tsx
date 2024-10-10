// PROBLEMATIC CODE

// import React, { useState } from "react";
// import styled from "styled-components";

// interface DynamicBackgroundDivProps {
//   bgColor: string;
// }

// const DynamicBackgroundDiv = styled.div<DynamicBackgroundDivProps>`
//   background-color: ${(props) => props.bgColor};
//   padding: 20px;
//   text-align: center;
// `;

// // Helper function to get a random color
// const getRandomColor = (): string => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// // Parent component
// const Parent: React.FC = () => {
//   const [counter, setCounter] = useState<number>(0);
//   const bgColor = getRandomColor();

//   return (
//     <DynamicBackgroundDiv bgColor={bgColor}>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>➕</button>
//       <button onClick={() => setCounter(counter - 1)}>➖</button>
//       <ExpensiveComponent />
//     </DynamicBackgroundDiv>
//   );
// };

// // Component that simulates a slow operation
// const ExpensiveComponent: React.FC = () => {
//   const startTime = Date.now();
//   let currentTime = startTime;

//   while (currentTime - startTime < 1000) {
//     currentTime = Date.now();
//   }

//   return null; // This component renders nothing
// };

// export default Parent;

// --------------------------------------------------------------------------------------------------------

// SOLUTION 1: WITH useMemo
// don't rush into using useMemo as it has it's own quirks.

// import React, { useState } from "react";
// import styled from "styled-components";

// interface DynamicBackgroundDivProps {
//   bgColor: string;
// }

// const DynamicBackgroundDiv = styled.div<DynamicBackgroundDivProps>`
//   background-color: ${(props) => props.bgColor};
//   padding: 20px;
//   text-align: center;
// `;

// // Helper function to get a random color
// const getRandomColor = (): string => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// // Component that simulates a slow operation
// const ExpensiveComponent: React.FC = () => {
//   const startTime = Date.now();
//   let currentTime = startTime;

//   while (currentTime - startTime < 1000) {
//     currentTime = Date.now();
//   }

//   return null; // This component renders nothing
// };

// const MemoizedEC = React.memo(ExpensiveComponent);

// // Parent component
// const Parent: React.FC = () => {
//   const [counter, setCounter] = useState<number>(0);
//   const bgColor = getRandomColor();

//   return (
//     <DynamicBackgroundDiv bgColor={bgColor}>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>➕</button>
//       <button onClick={() => setCounter(counter - 1)}>➖</button>
//       <MemoizedEC />
//     </DynamicBackgroundDiv>
//   );
// };

// export default Parent;

// --------------------------------------------------------------------------------------------------------

// SOLUTION 2 - THE BETTER ONE WITHOUT USING useMemo

import React, { useState, ReactNode } from "react";
import styled from "styled-components";

interface DynamicBackgroundDivProps {
  bgColor: string;
}

interface DynamicBackgroundProps {
  children: ReactNode;
}

const DynamicBackgroundDiv = styled.div<DynamicBackgroundDivProps>`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  text-align: center;
`;

// Helper function to get a random color
const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Parent component
const Parent: React.FC = () => {
  return (
    <DynamicBackground>
      <ExpensiveComponent />
    </DynamicBackground>
  );
};

// DynamicBackground component
const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);

  const bgColor = getRandomColor();
  return (
    <DynamicBackgroundDiv bgColor={bgColor}>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>➕</button>
      <button onClick={() => setCounter(counter - 1)}>➖</button>
      {children}
    </DynamicBackgroundDiv>
  );
};

// Component that simulates a slow operation
const ExpensiveComponent: React.FC = () => {
  const startTime = Date.now();
  let currentTime = startTime;

  while (currentTime - startTime < 1000) {
    currentTime = Date.now();
  }

  return null; // This component renders nothing
};

export default Parent;
