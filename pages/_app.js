import { appWithTranslation } from "../i18n.js";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "jquery/dist/jquery.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";
import "../styles/Global.scss";
// import { useEffect } from "react";

Router.events.off("routeChangeStart", () => NProgress.start());
Router.events.off("routeChangeComplete", () => NProgress.done());
Router.events.off("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  
  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => NProgress.start());
  //   Router.events.on("routeChangeComplete", () => {
  //     window.scroll(0, 0);
  //     NProgress.done();
  //   });
  //   Router.events.on("routeChangeError", () => NProgress.done());
  //   return () => {
  //     Router.events.off("routeChangeStart", () => NProgress.start());
  //     Router.events.off("routeChangeComplete", () => {
  //       window.scroll(0, 0);
  //       NProgress.done();
  //     });
  //     Router.events.off("routeChangeError", () => NProgress.done());
  //   };
  // });
  
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
