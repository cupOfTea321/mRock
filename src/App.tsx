import {useEffect} from "react";
import {ThemeProvider} from "@mui/material";
import {privateRoutes, routes} from "./router/router.js";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import {theme} from "./mui";
import WOW from "wow.js";
import Layout from "./component/layout/Layout";
import ScrollToTop from "./utils/ScrollToTop";
import {useSelector} from "react-redux";
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
    useEffect(() => {
        // const token = useSelector()
    }, [])
    const location = useLocation();
    // const { isLoading } = useGetProjectsQuery(1);
    const isLoading = false
    const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
    const isAuthenticated = localStorage.getItem('access');
    return isLoading ? (
        <div>Загрузка</div>
    ) : (
        <>
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
                                element={isAuthenticated ? route.element : <Navigate to="/" replace />}
                            />
                        ))}
                    </Route>
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
