import {createRef} from "react";
import {Navigate} from "react-router-dom";
import {AboutPage, AuthPage, IdeaPage, MainPage, MusicianPage, RegPage, ThousandPage} from "../pages";

export const routes = [
  { path: "", element: <MainPage />, nodeRef: createRef() },
  { path: "about", element: <AboutPage />, nodeRef: createRef() },
  { path: "idea", element: <IdeaPage />, nodeRef: createRef() },
  { path: "thousand", element: <ThousandPage />, nodeRef: createRef() },
  { path: "auth", element: <AuthPage />, nodeRef: createRef() },
  { path: "reg", element: <RegPage />, nodeRef: createRef() },
  { path: "musician", element: <MusicianPage />, nodeRef: createRef() },
  { path: "/*", element: <Navigate to="" replace />, nodeRef: createRef() },
];
