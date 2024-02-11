import { createRef } from "react";
import { Navigate } from "react-router-dom";
import {MainPage, AboutPage, ThousandPage, AuthPage, IdeaPage, CabPage} from "../pages";
export const routes = [
  { path: "", element: <MainPage />, nodeRef: createRef() },
  { path: "about", element: <AboutPage />, nodeRef: createRef() },
  { path: "idea", element: <IdeaPage />, nodeRef: createRef() },
  { path: "thousand", element: <ThousandPage />, nodeRef: createRef() },
  { path: "auth", element: <AuthPage />, nodeRef: createRef() },
  { path: "core", element: <CabPage />, nodeRef: createRef() },
  { path: "/*", element: <Navigate to="" replace />, nodeRef: createRef() },
];
