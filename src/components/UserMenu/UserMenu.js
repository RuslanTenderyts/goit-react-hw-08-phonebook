import { useDispatch, useSelector } from "react-redux"
import { authSelectors } from "redux/auth/auth-selectors";
import { logOut } from "redux/auth/auth-operations"
import defaultAvatar from "./default-avatar.jpg";



export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.selectUserName);
    const avatar = defaultAvatar;

    return (
        <div>
            <img src={avatar} alt="avatar" width="32" />
            <span> Вітаю {name} </span>
            <button type="button" onClick={() => dispatch(logOut())}>
                Вийти
            </button>
        </div>
    )
}