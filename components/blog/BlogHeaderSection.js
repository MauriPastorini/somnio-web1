import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

export const BlogHeaderSection = ({ t }) => {
  return (
    <section className="BlogHeaderSection">
      <div className="custom-container">
        <h1 className="header-title ">Take a look at our blog</h1>
      </div>

      <style jsx>{`
        .BlogHeaderSection {
          position: relative;
          overflow: hidden;
          background-image: url(/assets/images/blog/header-bg.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 200%;
          height: 1633px;

          .header-title {
            position: relative;
            font-weight: bold;
            font-size: 80px;
            color: #ffffff;
            z-index: 1;
            margin-top: 465px;
            max-width: 528px !important;
          }
        }
        
        @media screen and (max-width: 1920px) {
          .BlogHeaderSection {
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: top;
          }
        }
      `}</style>
    </section>
  );
};

// BlogHeaderSection.propTypes = {
//   t: PropTypes.func.isRequired,
// };

export default withTranslation("common")(BlogHeaderSection);
