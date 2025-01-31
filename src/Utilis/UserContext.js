import { React, createContext } from "react";

export const UserContext = createContext({
  user: {
    name: "userName",
    email: "user@email.com",
  },
});

export default UserContext;
