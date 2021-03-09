import React from "react";
import Footer from "../components/common/Layout/Footer";

const Prueba = () => {
  return (
    <>
      <div className="test">
        <p>prueba</p>
      </div>
      <Footer />
      <style jsx>{`
        .test {
          height: 3000px;
        }
      `}</style>
    </>
  );
};

export default Prueba;
