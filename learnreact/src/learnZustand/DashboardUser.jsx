// import React from "react";
import useAuthStore from "./Auth/store/useAuthStore";
import { useShallow } from "zustand/shallow";
function DashboardUser() {
  // const username = useAuthStore((state) => state.username);
  // const role = useAuthStore((state) => state.role);
  // const count = useAuthStore((state) => state.count);
  // const increment = useAuthStore((state) => state.increment);
  // const decrement = useAuthStore((state) => state.decrement);
  const { username, role, count, increment, decrement } = useAuthStore(
    useShallow((state) => ({
      username: state.username,
      role: state.role,
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
    })),
  );
  return (
    <>
      <div>Dashboard User</div>
      <h1>{username}</h1>
      <h1>role: {role}</h1>
      <p>Count: {count} </p>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default DashboardUser;
