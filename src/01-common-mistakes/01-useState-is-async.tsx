import { useState } from "react";

import React from "react";

const UseStateIsAsync = () => {
  const [user, setUser] = useState({ id: "", name: "" });

  const nameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: (e.target as HTMLInputElement).value,
    }));
    // since useState is async, we are not getting the updated userName here
    // const userName = user.name;
    // console.log(userName);

    // this also works to get the latest userName
    // const userName = (e.target as HTMLInputElement).value;
    // console.log(userName);
  };

  // gives latest userName, because of re-render when setUser is run
  const userName = user.name;
  console.log(userName);

  return <input type="text" onChange={nameChangeHandler} />;
};

export default UseStateIsAsync;
