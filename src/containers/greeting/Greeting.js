import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text"> {greeting.title} </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button className="m-2" text="Contact me" href="#contact" />
                <Button
                  className="m-2"
                  text="Google Scholar"
                  newTab={true}
                  href={greeting.googleScholarLink}
                />
                <Button
                  className="m-2"
                  text="CV"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="portrait_picture"
              src={require("../../assets/images/rob_6__square__lowres.jpg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
