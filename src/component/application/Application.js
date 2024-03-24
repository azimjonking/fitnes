import React, { useState } from "react";
import "./application.css";
import applicationData from "./applicationData";

const Application = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <section className="application container">
      <div className="categories-btns">
        {applicationData.map((cat, i) => {
          return (
            <button
              className={`btn btn-primary ${currentTab === `${cat.id}` && "active"}`}
              key={i}
              id={cat.id}
              disabled={currentTab === `${cat.id}`}
              onClick={handleTabClick}
            >
              {cat.category}
            </button>
          );
        })}
      </div>

      {applicationData.map((content, i) => {
        return (
          <div key={i} className="application-container">
            {currentTab === `${content.id}` && (
              <div className="application-content">
                <div className="img">
                  {content.images[0] && (
                    <img src={content.images[0]} alt="mobile app" />
                  )}
                </div>
                <div className="application-box">
                  <h1 className="box-title">{content.title}</h1>
                  {content.text1.map((text, i) => {
                    return (
                      <p key={i} className={`text1-${i + 1} box-text`}>
                        {text}
                      </p>
                    );
                  })}

                  {content.text2 &&
                    content.text2.map((text, i) => {
                      return (
                        <p key={i} className={`text2-${i + 1} box-text`}>
                          {text}
                        </p>
                      );
                    })}
                </div>
                <div className="img">
                  {content.images[1] && (
                    <img src={content.images[1]} alt="mobile app" />
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Application;
