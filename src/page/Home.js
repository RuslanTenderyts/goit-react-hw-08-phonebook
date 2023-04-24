import React from "react";
import {
  Container,
  Typography,
  Box,
  SvgIcon,
} from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const Home = () => {
  return (
    <Container maxWidth="sm" >
      
      <Typography variant="h2" align="center" >
        PhoneBook
      </Typography>
      <Box display="flex" justifyContent="space-around"  sx={{mr:"auto", ml:"auto"}}>
      <SvgIcon sx={{ fontSize: 240 }}>
        <ContactPhoneIcon />
      </SvgIcon>
      </Box>
    </Container>
  );
};

export default Home;
