import { appWithTranslation } from "../i18n.js";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "jquery/dist/jquery.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";
import "../assets/scss/Global.scss";
import { useEffect } from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/7545948.js"></script>
        {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7545948.js"></script> */}
        <script src="/assets/js/widget.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
