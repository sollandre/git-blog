import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../../components/Header";
import { MainContainer } from "./styles";

const redirectHome = {}

export function DefaultLayout() {

  return ( 
    <>
      <Header />
      <MainContainer>
        <Outlet  />
      </MainContainer>
    </>
   );
}

