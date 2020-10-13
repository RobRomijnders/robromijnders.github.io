import React from "react";
import "./Publications.css";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import { publicationsSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Publications() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div className="publications-main-div">
          <div className="publications-header">
            <h1 className="heading publications-heading">
              {publicationsSection.title}
            </h1>
            <p className="subTitle publications-subtitle">
              {publicationsSection.subtitle}
            </p>
          </div>
          <div className="publications-cards-div">
            {publicationsSection.publicationCards.map((card, index) => {
              return (
                <PublicationCard
                  key={index}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
