import { useEffect, useState } from "react";
import { appWithTranslation } from "../i18n.js";
import App from "next/app";
import Head from "next/head";
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
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7545948.js"></script>
        <script type="text/javascript" src="/assets/js/widget.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
          crossorigin="anonymous"
        ></script>
      </Head>
      {!loading && <Component {...pageProps} />}
    </>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
