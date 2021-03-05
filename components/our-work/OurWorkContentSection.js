import React from "react";
import { OurWorkCard } from "../common/OurWorkCard";

export const OurWorkContentSection = () => {
  const data = [
    {
      bg: "/assets/images/our-work/bg-jaac.png",
      title: "Jaac",
      description:
        "Jaac is a platform that improves customer service for restaurants and at the same time helps the restaurant have better management and save revenue.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Gastronomy", "F&B"],
      tech: ["UX/UI", "iOS", "Android", "PWA"],
    },
    {
      bg: "/assets/images/our-work/bg-crime.png",
      title: "CrimeDoor",
      description:
        "With CrimeDoor you can review thousands of case files, and experience crime scenes through Augmented Reality.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Entertainment", "News"],
      tech: ["UX/UI", "iOS", "Android", "PWA"],
    },
    {
      bg: "/assets/images/our-work/bg-pay-my-trades.png",
      title: "Pro Wallet",
      description:
        "Pro Wallet is an instant payment solution for the construction industry that digitalizes and facilitates payment processes.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Finance", "Fintech", "Economics", "Real State"],
      tech: ["UX/UI", "iOS", "Android"],
    },
    {
      bg: "/assets/images/our-work/bg-formula.png",
      title: "Fórmula",
      description:
        "Fórmula is a platform for beauty, makeup, skincare, and haircare lovers and enthusiasts. It is the most notable community of Beauty in Uruguay.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Beauty", "Cosmetics"],
      tech: ["UX/UI", "Web App"],
    },
    {
      bg: "/assets/images/our-work/bg-icuc.png",
      title: "ICUC",
      description:
        "ICUC is a learning platform that aims to help surgeons and future surgeons analyze, review and learn treatments from the world’s leading surgeons.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Health", "Medicine"],
      tech: ["Web App"],
    },

    {
      bg: "/assets/images/our-work/bg-quran.png",
      title: "Quran",
      description:
        "An app that helps learn by heart the Quran. It enables users to keep a record of the process of memorizing each chapter, verse, and sign through feedback and updates.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Education", "Religion"],
      tech: ["UX/UI", "iOS", "Android"],
    },
  ];

  return (
    <div className="OurWorkContentSection custom-container">
      <div className="filter-buttom-group">
        <button className="btn btn-custom-3">All</button>
        <button className="btn btn-custom-3">Mobile</button>
        <button className="btn btn-custom-3">Web</button>
      </div>

      <div className="our-work-list">
        {data.map((d, i) => (
          <OurWorkCard data={d} />
        ))}
      </div>

      <style jsx>{`
        .OurWorkContentSection {
          margin-top: -569px;
          position: relative;

          .our-work-list {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 130px;
          }

          .filter-buttom-group {
            display: flex;
            justify-content: center;
            margin: 0 -15px 65px -15px;

            button {
              padding: 3px 0 !important;
              margin: 3px 15px !important;
              font-size: 20px !important;
              width: 147px !important;
              min-width: 147px !important;
            }
          }
        }

        @media screen and (max-width: 1400px) {
          .OurWorkContentSection {
            margin-top: -665px;
          }
        }

        @media screen and (max-width: 1350px) {
          .OurWorkContentSection {
            margin-top: -700px;
          }
        }

        @media screen and (max-width: 1280px) {
          .OurWorkContentSection {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
