import {useEffect} from "react";
import {ThemeProvider} from "@mui/material";
import { routes } from "./router/router.js";
import { Route, Routes, useLocation } from "react-router-dom";
import {theme} from "./mui";
import Layout from "./component/layout/Layout";
function App() {
    const location = useLocation();
    // const { isLoading } = useGetProjectsQuery(1);
    const isLoading = false
    const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

    return isLoading ? (
        <div>Загрузка</div>
    ) : (
        <>
            {/*<ScrollToTop />*/}
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
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
