import { HeaderStyle, ContainerButtons, ContainerUser, LogOut } from "./styles";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

import UserIcon from "../../assets/user-icon.svg";

export default function Header() {
  const dispatch = useDispatch();

  const { name } = useSelector(selectUser);

  const handleLogout = (): void => {
    console.log("handleLogout");
    dispatch(logout());
  };

  return (
    <HeaderStyle>
      <h3>CodeLeapNetwork</h3>

      <ContainerButtons>
        <ContainerUser>
          <img src={UserIcon} height={12} />
          <strong>{name}</strong>
        </ContainerUser>
        <span> | </span>
        <LogOut onClick={handleLogout}> Logout </LogOut>
      </ContainerButtons>
    </HeaderStyle>
  );
}
