import { Outlet } from "react-router-dom";
import Footer from "./Footer.js";
import MyBar from "./MyBar.js";
import {Box} from "@mui/material";

const Layout = ({location}) => {
    const path = location.pathname
  return (
    <>
        {
            path !== '/auth' && <MyBar />
        }

      <Outlet />
        {
            path !== '/auth' && <Footer path={path}/>
        }

    </>
  );
};

export default Layout;
