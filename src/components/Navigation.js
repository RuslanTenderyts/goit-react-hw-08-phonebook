
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth/auth-selectors";
import { Box, Typography } from "@mui/material"; // Імпорт компонентів з Material-UI
import { styled } from "@mui/material/styles";

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit",
    "&.active": {
      color: "#1565c0", // Styles for active NavLink
      textShadow: "#1565c0 1px 0 10px",
    },
  }));

  return (
    <nav>
      <Box display="flex">
        <Box mr={1}>
          <StyledNavLink to="/" exact="true" >
            <Typography 
            variant="h6"
            component="p">
              Home</Typography>
          </StyledNavLink>
        </Box>
        {isLoggedIn && (
          <Box mr={1}>
            <StyledNavLink to="/contacts" >
              <Typography 
              variant="h6"
              component="p">
                Contacts</Typography>
            </StyledNavLink>
          </Box>
          
        )}
      </Box>
     
    </nav>
  );
};


