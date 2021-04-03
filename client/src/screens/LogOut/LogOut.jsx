import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const LogOut = (props) => {
  const { handleLogout, currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    handleLogout(currentUser);
    history.push("/");
  }, [history, handleLogout, currentUser]);

  return "";
};

export default LogOut;
