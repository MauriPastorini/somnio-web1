import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../i18n";

const FaqContentSection = ({ t }) => {
  return (
    <div className="FaqContentSection custom-container">
      <aside className="navigation-faq">
        <ul>
          <li className="active">1. About us</li>
          <li>2. How we work</li>
          <li>3. Flutter</li>
          <li>4. Timing & Budget</li>
        </ul>
      </aside>

      <div className="content-faq">
        <div className="section-header-light" data-aos="fade-in">
          <h2>1. About us</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div class="accordion accordion-flush" id="accordionFlush1">
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
                What specific services do you provide?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlush1"
            >
              <div className="accordion-body">
                <p>We do the whole process of software engineer:</p>
                <ul>
                  <li>Consulting</li>
                  <li>Software of requirements</li>
                  <li>Design UX/UI</li>
                  <li>Architecture</li>
                  <li>Development and Software Design</li>
                  <li>Testing</li>
                  <li>Launch</li>
                  <li>Support</li>
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
                How is your team integrated?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlush1"
            >
              <div className="accordion-body">
                <p>
                  Somnio Software's collaborative team integrates different talents and areas such as software
                  engineering, designing and marketing.
                </p>

                <p>
                  Our team has Front-End Developers (Mobile and Web), Back-End Developers and UX/UI designers. As we are
                  focusing on Flutter, we have specialized Flutter Developers. We also have Project Managers and a CTO
                  that is in charge of helping the team and supervising the quality of the code.
                </p>

                <p>In Addition, we have a Digital Marketing and Business Development team.</p>

                <p>
                  Together we are a solid team that has experience in our specific areas, as well as working as a group.
                </p>
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
                How is your approach towards continuing learning and staying updated?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlush1"
            >
              <div className="accordion-body">
                <p>
                  All of Somnio Software employees, regarding their level, are capacitated in platforms such as Udemy
                  and Pluralsight. Besides, we provide training in our work place with the technical area of the company
                  for about 3 or 5 weeks in order to complete, progress and elevate their profile.
                </p>
                <p>
                  In addition, we measure their performance in the platform Pluralsight where we create a Skill IQ to
                  evaluate their work, capabilities and potential so we can have a profound insight in order to know
                  where they need to be trained.
                </p>
                <p>
                  We even dedicate 2 hours per week so that each person can continue learning and training so they can
                  grow in their specific area. Plus, we make every thursday “English Day” and we talk all day in English
                  as a successful way to practice the language.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header-light" data-aos="fade-in">
          <h2>2. How we work</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div class="accordion accordion-flush" id="accordionFlush2">
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
                How is you work process?
              </button>
            </h2>
            <div
              id="flush-collapseOne2"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne2"
              data-bs-parent="#accordionFlush2"
            >
              <div className="accordion-body">
                <p>
                  The process that we use to build an application is the full software engineer process. We make the
                  consulting, requirements analysis, UI/UX interfaces, development, testing, launching and maintaining.
                </p>

                <p>
                  We start by deeply understanding the client’s needs through a really careful communication between
                  parts, which includes many back and forth of it’s features.
                </p>

                <p>
                  Then we start making the UX/UI interfaces and deliver them to the clients, so that they can observe
                  and take their time to fully understand the different screens. This is important because the client
                  can visualize the app they will receive and it’s a guarantee of the outcome. In our experience, they
                  are even better than what they imagined.
                </p>

                <p>
                  Following this, we start creating the product. First we build the architecture and design the software
                  in order to start developing. During this process we frequently test the app in order to guarantee
                  high quality products.
                </p>

                <p>
                  Finally, we launch the app with DevOps techniques which make our products fast integrable and assure
                  their excellent quality.
                </p>

                <p>
                  With this process, clients obtain outstanding products that help bring their business to the next
                  level.
                </p>
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
                What is the first thing you need from a client?
              </button>
            </h2>
            <div
              id="flush-collapseTwo2"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo2"
              data-bs-parent="#accordionFlush2"
            >
              <div className="accordion-body">
                <p>
                  To begin the process of the project, I mostly require compromise, time and communication from clients.
                </p>

                <p>
                  The process starts with a deep understanding of the client’s needs. That's why we take our time to
                  know our client's project idea so we can start. Afterwards, we share with them our techniques in order
                  to understand what services and features helps them best to their business. Then it begins the
                  development and analysis of our work while frequently communicating the different features till we
                  achieve the desired results and the client is fully satisfied. This way of working has had outstanding
                  results as we have always provided high valuable products to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header-light" data-aos="fade-in">
          <h2>3. Flutter</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div class="accordion accordion-flush" id="accordionFlush3">
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
                Why Flutter and not React Native?
              </button>
            </h2>
            <div
              id="flush-collapseOne3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>
                  If you are planning on creating a fast, high-quality performance and native experience app, Flutter is
                  the best option. For instance, React Native has a lot of problems with dependencies, the app crashes a
                  lot, the environment its not that intuitive and well designed for developers, and the mobile heats a
                  lot when running basic apps. On the opposite, Flutter provides a faster performance with a quicker
                  developing time and an excellent experience for the user.
                </p>
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
                Why Flutter and not a Native code?
              </button>
            </h2>
            <div
              id="flush-collapseTwo3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>
                  Flutter provides the same experience and performance than a Native code with the advantage of
                  including faster programming, quicker time-to-market and the use of native codes if needed. In
                  conclusion, why go through a long developing process with twice the developing costs if Flutter
                  provides the same experience?
                </p>
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
                Why Flutter and not Ionic?
              </button>
            </h2>
            <div
              id="flush-collapseThree3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>
                  Even though Ionic provides a pretty fast development, the possibility to reuse the code from the web
                  and it’s friendly for web developers, it lags behind other cross-plaforms such as Flutter.
                </p>
                <p>
                  For instance, it relies on web views to display the user interface of the app. A web view means that
                  it launches a browser inside the application and this is a limiting factor when compared to
                  techonology that provides a native performance. Both Ionic and Flutter use a single codebase across
                  various platforms, but Ionic doesn’t provide a native experience while Flutter does, as it compiles
                  into a native code.
                </p>
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
                Why Flutter and not a PWA?
              </button>
            </h2>
            <div
              id="flush-collapseFour3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>
                  A Pwa is a web application that can be opened in a web browser on any device, but even though it
                  strives to deliver a native app experience it does not acomplish it completely. For instance, it’s
                  browser-dependent, it isn’t easy to access the hardware, for example the bluetooth modules and it
                  doesn’t have push notifications. It doesn’t work like a mobile application since it has to access the
                  Internet to look and load some things. This means that it takes more time. On the other hand, Flutter
                  is Google’s SDK for creating cross-platform application that provides high quality performances with a
                  native experience and flexible and expressive UI.
                </p>
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
                Why is Flutter faster to develop?
              </button>
            </h2>
            <div
              id="flush-collapseFive3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>
                  To use Flutter you do not need to hire both Android and iOS developers, since it uses one codebase for
                  all platforms. You also do not need to maintain two different repositories. In addition, it provides a
                  quick compilation which allows the developer to visualize the results of a change in the code in real
                  time.
                </p>
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
                Why is Flutter twice less cost?
              </button>
            </h2>
            <div
              id="flush-collapseSix3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix3"
              data-bs-parent="#accordionFlush3"
            >
              <div className="accordion-body">
                <p>
                  You don’t have to afford both Android and IOS developers and build the same thing twice! This is one
                  of Flutter’s strongest suits: it uses one codebase for all platforms. So, the reason why is faster is
                  almost the same of why it costs less. This is a great advantage that makes the difference.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header-light" data-aos="fade-in">
          <h2>4. Timing & Budget</h2>
          <img src={"/assets/images/home-services-line-light.svg"} alt="" />
        </div>

        <div class="accordion accordion-flush" id="accordionFlush4">
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
                How fast can you build my project?
              </button>
            </h2>
            <div
              id="flush-collapseOne4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne4"
              data-bs-parent="#accordionFlush4"
            >
              <div className="accordion-body">
                <p>
                  It really depends on the project. Nevertheless, with each project, we focus on delivering the quicker
                  outcome possible by following an efficient process. Once we gather the requirements and deeply
                  understand the project goal we deliver estimations of the expected time.
                </p>
                <p>
                  There are several conditions that help us be prepared to build your project in the needed time, no
                  extra. For instance, we train our team in their area of expertise and encourage team synergy to
                  complement their talents. Their skills next to their experience working together allows them to work
                  faster, more effectively, and achieve high-level results. Plus, we have tech libraries to speed things
                  up by reusing solutions without wasting time reinventing the wheel.
                </p>
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
                How do you charge?
              </button>
            </h2>
            <div
              id="flush-collapseTwo4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo4"
              data-bs-parent="#accordionFlush4"
            >
              <div className="accordion-body">
                <p>
                  We work by hourly rate for our projects. We provide an estimation in hours for what a functionality or
                  change can take. You can always take your time to decide in order to prioritize depending on the value
                  of an addition or change. We like to emphasize that no decision is final, you can always re-evaluate a
                  choice and make changes.
                </p>

                <p>
                  This gives us flexibility to easily make changes in the app if they are needed without having to stick
                  to a contract. It’s easier and faster to include requirements, make changes or remove functionalities.
                </p>

                <p>
                  We give you an estimation of the hours but it’s not the final value. We will frequently compare the
                  time planned with the actual progress to check if there is any deviation in order to understand why it
                  happened and look for possible solutions together.
                </p>

                <p>
                  This way the flow of the project is more fluent. In our experience, both sides are more comfortable
                  working by hours since we can work much faster and in a natural and comfortable way.
                </p>

                <p>
                  In the end, the product we delivery has a higher quality and value given that there are fewer
                  obstacles and bureaucracy during the process to make changes and adjust the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .FaqContentSection {
          height: auto;
          position: relative;
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

            .section-header-light {
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
              background-image:  url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAO0lEQVQ4je3OoQEAIQzF0BTFNMjbfytQBMcArTjD880vPGWhDqAl73eoE+jJwMouX/8HQv0KoV194AEO4WcNXKiyPh0AAAAASUVORK5CYII=');
              transform: rotate(180deg);

          }
          
          .accordion-button::after {
              flex-shrink: 0;
              width: 1rem;
              height: 1rem;
              margin-left: auto;
              content: "";
              background-image:   url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcElEQVQ4jcWSMQqAMBAEJ2LhW8Q6+CFf5bf8i1ZZG6vLBoQUWbhmWLYYDkwkZUl3uOy6s4PABCyG2WJXxg/Mn5w4tJruJimykiTd1ML+5hnvoHsgNSRuwBnYAVyBFbsqaVed3XXHO+j/xAYvwGNYlRcnj0JeICSreAAAAABJRU5ErkJggg==');
              background-repeat: no-repeat;
              background-size: 1rem;
              transition: transform .2s ease-in-out;
              fill: #fff;
          }

            .accordion-collapse{
              border: none;

              .accordion-body{
                padding-left: 40px;
              }
            }

            ul {
              list-style: none; /* Remove list bullets */
              padding: 0;
              margin: 0;
            }

            li:before {
              content: "-";
              padding-right: 8px;
            }
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
