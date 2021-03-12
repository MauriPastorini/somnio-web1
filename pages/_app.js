import { useEffect, useState } from "react";
import { appWithTranslation } from "../i18n.js";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";
import "../styles/Global.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      NProgress.start();
      setloading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setloading(false);
      NProgress.done();
    });
    Router.events.on("routeChangeError", () => {
      setloading(false);
      NProgress.done();
    });

    return () => {
      Router.events.off("routeChangeStart");
      Router.events.off("routeChangeComplete");
      Router.events.off("routeChangeError");
    };
  });
  
  return (
    <>
      {!loading && <Component {...pageProps} />}
    </>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
