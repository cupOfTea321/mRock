import {Outlet} from "react-router-dom";
import Footer from "./Footer.js";
import MyBar from "./MyBar.js";
import {Box} from "@mui/material";

const Layout = ({location}) => {
    const path = location.pathname
    const visible = (
        path !== '/auth' &&
        path !== '/reg'  &&
        path !== '/musician' &&
        path !== '/musician/change'
    )
    console.log(visible)
    return (
        <>
            {
                visible && <MyBar/>
            }

            <Outlet/>
            {
                visible && <Footer path={path}/>
            }

        </>
    );
};

export default Layout;
