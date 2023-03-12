import { PropsWithChildren } from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { DefaultLayout } from "./pages/layouts/DefaultLayout";
import { router } from "./router/router";
import { defaultTheme } from "./theme";


export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

