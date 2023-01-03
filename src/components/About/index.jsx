import { useContext } from "react";

import UserContext from "../../UserContext";

export default function () {
  const user = useContext(UserContext);
  return <div>Hi {user.name}</div>;
}
