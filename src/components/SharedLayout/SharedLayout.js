
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { Suspense } from "react";
import { AppBar } from "components/AppBar";

export const SharedLayout = () => {
  return (
    <Container fixed>
      <header>
        <AppBar />
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};