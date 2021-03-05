import React, { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const FaqContentSection = ({ t }) => {
  const [navigationActive, setNavigationActive] = useState("aboutus");

  const aboutRef = useRef();
  const howWeWorkRef = useRef();
  const flutterRef = useRef();
  const timmingRef = useRef();

  const listener = (e) => {
    const navigationPosActive = window.scrollY + 200;
    if (navigationPosActive > aboutRef.current.offsetTop) {
      setNavigationActive("aboutRef");
    }
    if (navigationPosActive > howWeWorkRef.current.offsetTop) {
      setNavigationActive("howWeWorkRef");
    }
    if (navigationPosActive > flutterRef.current.offsetTop) {
      setNavigationActive("flutterRef");
    }
    if (navigationPosActive > timmingRef.current.offsetTop) {
      setNavigationActive("timmingRef");
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 150);
  };

  return (
    <section className="FaqContentSection custom-container">
      <aside className="navigation-faq">
        <ul>
          <li onClick={() => scrollToRef(aboutRef)} className={`${navigationActive == "aboutRef" ? "active" : ""}`}>
            {t("faq.content.section_1.title")}
          </li>
          <li
            onClick={() => scrollToRef(howWeWorkRef)}
            className={`${navigationActive == "howWeWorkRef" ? "active" : ""}`}
          >
            {t("faq.content.section_2.title")}
          </li>
          <li onClick={() => scrollToRef(flutterRef)} className={`${navigationActive == "flutterRef" ? "active" : ""}`}>
            {t("faq.content.section_3.title")}
          </li>
          <li onClick={() => scrollToRef(timmingRef)} className={`${navigationActive == "timmingRef" ? "active" : ""}`}>
            {t("faq.content.section_4.title")}
          </li>
        </ul>
      </aside>

      <div className="content-faq">
        <div className="header--light" data-aos="fade-in" ref={aboutRef}>
          <h2>{t("faq.content.section_1.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="accordion accordion-flush" id="accordionFlush1">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <span>{t("faq.content.section_1.question_1.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlush1"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_1.question_1.content.text_1")}</p>
                <ul>
                  <li>{t("faq.content.section_1.question_1.content.text_2")}</li>
                  <li>{t("faq.content.section_1.question_1.content.text_3")}</li>
                  <li>{t("faq.content.section_1.question_1.content.text_4")}</li>
                  <li>{t("faq.content.section_1.question_1.content.text_5")}</li>
                  <li>{t("faq.content.section_1.question_1.content.text_6")}</li>
                  <li>{t("faq.content.section_1.question_1.content.text_7")}</li>
                  <li>{t("faq.content.section_1.question_1.content.text_8")}</li>
                  <li>{t("faq.content.section_1.question_1.content.text_9")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <span>{t("faq.content.section_1.question_2.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlush1"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_1.question_2.content.text_1")}</p>
                <p>{t("faq.content.section_1.question_2.content.text_2")}</p>
                <p>{t("faq.content.section_1.question_2.content.text_3")}</p>
                <p>{t("faq.content.section_1.question_2.content.text_4")}</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <span>{t("faq.content.section_1.question_3.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlush1"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_1.question_3.content.text_1")}</p>
                <p>{t("faq.content.section_1.question_3.content.text_2")}</p>
                <p>{t("faq.content.section_1.question_3.content.text_3")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="header--light" data-aos="fade-in" ref={howWeWorkRef}>
          <h2>{t("faq.content.section_2.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="accordion accordion-flush" id="accordionFlush2">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne2"
                aria-expanded="false"
                aria-controls="flush-collapseOne2"
              >
                <span>{t("faq.content.section_2.question_1.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseOne2"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne2"
              data-bs-parent="#accordionFlush2"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_2.question_1.content.text_1")}</p>
                <p>{t("faq.content.section_2.question_1.content.text_2")}</p>
                <p>{t("faq.content.section_2.question_1.content.text_3")}</p>
                <p>{t("faq.content.section_2.question_1.content.text_4")}</p>
                <p>{t("faq.content.section_2.question_1.content.text_5")}</p>
                <p>{t("faq.content.section_2.question_1.content.text_6")}</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo2"
                aria-expanded="false"
                aria-controls="flush-collapseTwo2"
              >
                <span>{t("faq.content.section_2.question_2.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo2"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo2"
              data-bs-parent="#accordionFlush2"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_2.question_2.content.text_1")}</p>

                <p>{t("faq.content.section_2.question_2.content.text_2")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="header--light" data-aos="fade-in" ref={flutterRef}>
          <h2>{t("faq.content.section_3.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="accordion accordion-flush" id="accordionFlush3">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne3"
                aria-expanded="false"
                aria-controls="flush-collapseOne3"
              >
                <span>{t("faq.content.section_3.question_1.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseOne3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_3.question_1.content.text_1")}</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo3"
                aria-expanded="false"
                aria-controls="flush-collapseTwo3"
              >
                <span>{t("faq.content.section_3.question_2.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_3.question_2.content.text_1")}</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree3"
                aria-expanded="false"
                aria-controls="flush-collapseThree3"
              >
                <span>{t("faq.content.section_3.question_3.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseThree3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_3.question_3.content.text_1")}</p>
                <p>{t("faq.content.section_3.question_3.content.text_2")}</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour3"
                aria-expanded="false"
                aria-controls="flush-collapseFour3"
              >
                <span>{t("faq.content.section_3.question_4.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseFour3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_3.question_4.content.text_1")}</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive3"
                aria-expanded="false"
                aria-controls="flush-collapseFive3"
              >
                <span>{t("faq.content.section_3.question_5.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseFive3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_3.question_5.content.text_1")}</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix3"
                aria-expanded="false"
                aria-controls="flush-collapseSix3"
              >
                <span>{t("faq.content.section_3.question_6.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseSix3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_3.question_6.content.text_1")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="header--light" data-aos="fade-in" ref={timmingRef}>
          <h2>{t("faq.content.section_4.title")}</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div className="accordion accordion-flush" id="accordionFlush4">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne4"
                aria-expanded="false"
                aria-controls="flush-collapseOne4"
              >
                <span>{t("faq.content.section_4.question_1.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseOne4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne4"
              data-bs-parent="#accordionFlush4"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_4.question_1.content.text_1")}</p>
                <p>{t("faq.content.section_4.question_1.content.text_2")}</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo4"
                aria-expanded="false"
                aria-controls="flush-collapseTwo4"
              >
                <span>{t("faq.content.section_4.question_2.title")}</span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo4"
              data-bs-parent="#accordionFlush4"
            >
              <div className="accordion-body">
                <p>{t("faq.content.section_4.question_2.content.text_1")}</p>
                <p>{t("faq.content.section_4.question_2.content.text_2")}</p>
                <p>{t("faq.content.section_4.question_2.content.text_3")}</p>
                <p>{t("faq.content.section_4.question_2.content.text_4")}</p>
                <p>{t("faq.content.section_4.question_2.content.text_5")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .FaqContentSection {
          height: auto;
          display: flex;
          padding-bottom: 309px;

          .navigation-faq {
            width: 300px;
            heigth: 100%;
            position: sticky;
            top: 130px;
            align-self: flex-start;

            ul {
              list-style: none;
              padding-left: 0;

              li {
                font-size: 23px;
                color: #c1a9f4;
                margin-bottom: 14px;
                cursor: pointer;
              }

              .active {
                color: #48c7e2;
                font-weight: bold;
              }
            }
          }

          .content-faq {
            heigth: auto;
            width: 100%;
            color: #fff;

            .header--light {
              margin-top: 113px;
              margin-bottom: 113px;

              &:first-of-type {
                margin-top: 0;
              }
            }

            .accordion-button {
              font-size: 23px;
              font-weight: bold;
              color: #fff;
              border: none;
              border-bottom: 1px solid #8e7cb2;
              border-radius: 0;

              span {
                margin-right: 20px;
              }
            }

            .accordion-button:not(.collapsed) {
              color: unset;
              background-color: transparent;
            }

            .accordion-button:focus {
              z-index: 3;
              border-color: #8e7cb2;
              outline: 0;
              box-shadow: none;
            }

            .accordion-button:not(.collapsed)::after {
              background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAO0lEQVQ4je3OoQEAIQzF0BTFNMjbfytQBMcArTjD880vPGWhDqAl73eoE+jJwMouX/8HQv0KoV194AEO4WcNXKiyPh0AAAAASUVORK5CYII=");
              transform: rotate(180deg);
              padding-left: 20px;
            }

            .accordion-button::after {
              flex-shrink: 0;
              width: 1rem;
              height: 1rem;
              margin-left: auto;
              content: "";
              background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcElEQVQ4jcWSMQqAMBAEJ2LhW8Q6+CFf5bf8i1ZZG6vLBoQUWbhmWLYYDkwkZUl3uOy6s4PABCyG2WJXxg/Mn5w4tJruJimykiTd1ML+5hnvoHsgNSRuwBnYAVyBFbsqaVed3XXHO+j/xAYvwGNYlRcnj0JeICSreAAAAABJRU5ErkJggg==");
              background-repeat: no-repeat;
              background-size: 1rem;
              transition: transform 0.2s ease-in-out;
              fill: #fff;
              padding-left: 20px;
            }

            .accordion-collapse {
              border: none;

              .accordion-body {
                padding-left: 40px;
              }
            }

            ul {
              list-style: none; /* Remove list bullets */
              padding: 0;
              margin: 0;
            }

            li {
              margin-bottom: 14px;
            }

            li:before {
              content: "-";
              padding-right: 8px;
            }
          }
        }

        @media screen and (max-width: 1280px) {
          .FaqContentSection {
            flex-direction: column;
            padding-bottom: 114px;

            .navigation-faq {
              position: relative;
              top: 0;
              margin-bottom: 72px;

              ul {
                li {
                  font-size: 18px;
                  margin-bottom: 14px;
                }
              }
            }

            .content-faq {
              .header--light {
                margin-top: 91px;
                margin-bottom: 56px;
              }

              .accordion-button {
                font-size: 18px;
              }

              .accordion-collapse {
                .accordion-body {
                  padding-left: 17px;
                }
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

FaqContentSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(FaqContentSection);
