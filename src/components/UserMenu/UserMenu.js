import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import defaultAvatar from "./default-avatar.jpg";
import { Box, Typography, Button } from "@mui/material"; // Імпорт компонентів з Material-UI

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.selectUserEmail);
  const avatar = defaultAvatar;

  return (
    <Box display="flex" alignItems="center">
      <Box mr={1}>
        <img src={avatar} alt="avatar" width="32" />
      </Box>
      <Box mr={1}>
        <Typography variant="body1">{email}</Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          onClick={() => dispatch(logOut())}
        >
          Вийти
        </Button>
      </Box>
    </Box>
  );
};

