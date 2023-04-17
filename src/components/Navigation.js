import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth/auth-selectors" 

export const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && 
            <NavLink to="/contacts">Contacts</NavLink>
            }
        </nav>
        
    )
}