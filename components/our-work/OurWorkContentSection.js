import React, { useState } from "react";
import { OurWorkCard } from "../common/OurWorkCard";

export const OurWorkContentSection = () => {
  const [filter, setfilter] = useState("");

  const data = [
    {
      bg: "bg-jaac.png",
      title: "Jaac",
      description:
        "Jaac is a platform that improves customer service for restaurants and at the same time helps the restaurant have better management and save revenue.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Gastronomy", "F&B"],
      tech: ["UX/UI", "iOS", "Android", "PWA"],
      fontColor: "#FFD1D1"
    },
    {
      bg: "bg-crime.png",
      title: "CrimeDoor",
      description:
        "With CrimeDoor you can review thousands of case files, and experience crime scenes through Augmented Reality.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Entertainment", "News"],
      tech: ["UX/UI", "iOS", "Android", "PWA"],
      fontColor: "#7A88BE"
    },
    {
      bg: "bg-pay-my-trades.png",
      title: "Pro Wallet",
      description:
        "Pro Wallet is an instant payment solution for the construction industry that digitalizes and facilitates payment processes.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Finance", "Fintech", "Economics", "Real State"],
      tech: ["UX/UI", "iOS", "Android"],
      fontColor: "#9DBFF2"
    },
    {
      bg: "bg-formula.png",
      title: "Fórmula",
      description:
        "Fórmula is a platform for beauty, makeup, skincare, and haircare lovers and enthusiasts. It is the most notable community of Beauty in Uruguay.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Beauty", "Cosmetics"],
      tech: ["UX/UI", "Web App"],
      fontColor: "#FDE1D8"
    },
    {
      bg: "bg-icuc.png",
      title: "ICUC",
      description:
        "ICUC is a learning platform that aims to help surgeons and future surgeons analyze, review and learn treatments from the world’s leading surgeons.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Health", "Medicine"],
      tech: ["Web App"],
      fontColor: "#528CCE"
    },

    {
      bg: "bg-quran.png",
      title: "Quran",
      description:
        "An app that helps learn by heart the Quran. It enables users to keep a record of the process of memorizing each chapter, verse, and sign through feedback and updates.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Education", "Religion"],
      tech: ["UX/UI", "iOS", "Android"],
      fontColor: "#92BBD9"
    },
    {
      bg: "bg-cryptazar.png",
      title: "Cryptazar",
      description:
        "Cryptazar is a Web App that handles cryptocurrency transactions. It provides insight regarding the market’s movement, information regarding smart transactions, and a complete vision of the activities of professional investors.",
      url_google_play: "",
      url_app_store: "",
      categories: ["Finance", "Investment"],
      tech: ["UX/UI", "Web App"],
      fontColor: "#5A70E0"
    },
  ];

  const getCardsFiltered = () => {
    if (filter == "web") {
      return data.filter((d) => d.tech.find((t) => t == "Web App"));
    } else if (filter == "mobile") {
      return data.filter((d) => !d.tech.find((t) => t == "Web App"));
    } else {
      return data;
    }
  };

  return (
    <div className="OurWorkContentSection custom-container">
      <div className="filter-buttom-group">
        <button onClick={() => setfilter("")} className={`btn btn-custom-3 ${filter == "" && "btn-custom-3-active"}`}>
          All
        </button>
        <button
          onClick={() => setfilter("mobile")}
          className={`btn btn-custom-3 ${filter == "mobile" && "btn-custom-3-active"}`}
        >
          Mobile
        </button>
        <button
          onClick={() => setfilter("web")}
          className={`btn btn-custom-3 ${filter == "web" && "btn-custom-3-active"}`}
        >
          Web
        </button>
      </div>

      <div className="our-work-list">
        {getCardsFiltered().map((d, i) => (
          <OurWorkCard key={i} data={d} />
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

        @media screen and (max-width: 428px) {
          .OurWorkContentSection {
            margin-top: -385px;

            .our-work-list {
              margin-bottom: 20px;
            }

            .filter-buttom-group {
              button {
                padding: 3px 0 !important;
                margin: 3px 7px !important;
                font-size: 16px !important;
                width: auto !important;
                min-width: 97px !important;
              }
            }
          }
        }
      `}</style>
    </div>
  );
};
