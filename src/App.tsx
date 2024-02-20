import { ThemeProvider } from "@mui/material";
import { useEffect, useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import WOW from "wow.js";
import Layout from "./component/layout/Layout";
import { afisha } from "./handlers/afisha";
import { theme } from "./mui";
import { privateRoutes, routes } from "./router/router.js";
import ScrollToTop from "./utils/ScrollToTop";
import {YMInitializer} from "react-yandex-metrika";
function App() {
  useEffect(() => {
    const wow = new WOW({
      // Настройки по умолчанию
      offset: 100,
      // mobile: false,
      live: true,
    });

    wow.init();
  }, []);

  const location = useLocation();
  useLayoutEffect(() => {

    afisha();
  }, [location.pathname]);
  // const { isLoading } = useGetProjectsQuery(1);
  const isLoading = false;
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  const isAuthenticated = localStorage.getItem("access");
  return isLoading ? (
    <div>Загрузка</div>
  ) : (
    <>
      <YMInitializer accounts={[96408862]} />
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path={"/"}
            element={<Layout location={location} nodeRef={nodeRef} />}
          >
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                element={route.element}
              />
            ))}
          </Route>
          <Route
            path={"/"}
            element={<Layout location={location} nodeRef={nodeRef} />}
          >
            {privateRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                element={
                  isAuthenticated ? route.element : <Navigate to="/" replace />
                }
              />
            ))}
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
