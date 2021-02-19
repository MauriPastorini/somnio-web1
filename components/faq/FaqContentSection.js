import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const FaqContentSection = ({ t }) => {
  return (
    <div className="FaqContentSection">
      <aside className="navigation-faq">
        <ul>
          <li>1. About us</li>
          <li>2. How we work</li>
          <li>3. Flutter</li>
          <li>4. Timing & Budget</li>
        </ul>
      </aside>

      <div className="contentFaq">

      </div>
      <style jsx>{`
        .FaqContentSection {
          display: grid;
          grid-template-columns: 300px 1fr;
          grid-template-rows: auto;
          grid-template-areas: "navigationFaq contentFaq";

          .navigation-faq {
            grid-area: navigationFaq;
            background: red;
            width: 100%;
            heigth: auto;
          }

          .content-faq {
            grid-area: contentFaq;
            background: green;
            width: 100%;
            heigth: auto;
          }
        }
      `}</style>
    </div>
  );
};

FaqContentSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

FaqContentSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(FaqContentSection);
