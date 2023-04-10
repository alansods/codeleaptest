import { HeaderStyle } from "./styles";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";


export default function Header() {

  const dispatch = useDispatch();

  const { name } = useSelector(selectUser)

  const handleLogout = (): void => {
    console.log("handleLogout");
    dispatch(logout());
  };

  return (
    <HeaderStyle>
      <h3>CodeLeapNetwork</h3>
      <div>
        <strong>{ name }</strong>
        <span> | </span>
        <span onClick={handleLogout}> Sair </span>
      </div>
    </HeaderStyle>
  );
}
