import { useSelector } from "react-redux";
import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav";
import { UserMenu } from "./UserMenu/UserMenu"
import { authSelectors } from "redux/auth/auth-selectors"



export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
    
    return (
        <header>
            <Navigation/>
            {isLoggedIn ?  <UserMenu /> : <AuthNav />}
        </header>
    );
}