import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";


export const AuthNav = () => {
    const StyledNavLink = styled(NavLink)(({ theme }) => ({
        textDecoration: "none",
        color: "inherit",
        "&.active": {
          color: "red", // Styles for active NavLink
        },
      }));
    return (
        
        <Box display="flex">
            <Box mr={1}>
            <StyledNavLink to="/login" exact="true" >
                <Typography 
                variant="h6"
                component="p"
                >
                Login
                </Typography>
            </StyledNavLink>
            </Box>
            <Box mr={1}>
                <StyledNavLink to="/register" >
                <Typography 
                variant="h6"
                component="p"
                >
                    Register
                </Typography>
                </StyledNavLink>
            </Box>
        </Box>
        
)}
