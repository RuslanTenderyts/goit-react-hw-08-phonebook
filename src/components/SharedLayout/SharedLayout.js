import { Outlet } from "react-router-dom";
import { Container, Header } from "./SharedLayout.stayled";
import { Suspense } from "react";
import { AppBar } from "components/AppBar";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <AppBar />
      </Header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};