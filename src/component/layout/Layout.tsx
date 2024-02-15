import {Outlet} from "react-router-dom";
import Footer from "./Footer.js";
import MyBar from "./MyBar.js";
import {Box} from "@mui/material";

const Layout = ({location}) => {
    const path = location.pathname
    return (
        <>
            {
                path !== '/auth' &&
                path !== '/reg' && <MyBar/>
            }

            <Outlet/>
            {
                path !== '/auth' &&
                path !== '/reg' && <Footer path={path}/>
            }

        </>
    );
};

export default Layout;
