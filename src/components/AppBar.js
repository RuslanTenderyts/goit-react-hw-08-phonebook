import { useSelector } from "react-redux";
import { Navigation } from "./Navigation";
import { AuthNav } from "./AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";
import { authSelectors } from "redux/auth/auth-selectors";
import { Box } from "@mui/material"; // Імпорт компонентів з Material-UI

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <Box borderBottom={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{ flexGrow: 1 }}
        color="inherit"
        marginBottom={5}

       >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </>
  );
};


