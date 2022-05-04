import React from "react";
import "./About.css";

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={"https://i.ibb.co/pwQwcKV/itseumesmo.png"} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Born and raised in ne of the deepest places in the Amazon rainforest in Brazil.
               Created in the midst of people who work hard to survive in cities in the middle of the Amazon jungle. 
               I grew up in a simple and manual world, but I have always been passionate about new technologies and the new technological world. 
               
              </p>
              <p className="about__text p__color">
              When I became a young adult, I decided to study in one of the largest capitals in the country, Curitiba, in the state of Paraná in southern Brazil. 
               So I have two homes and dream of another one. I want to make web development my new home and I hope that together we can make this dream come true.
              </p>
              <p className="about__text p__color">
              I decided to dive into an intense period of studies on web development, developed some projects and discovered my passion for this amazing field. 
              I believe now is the time to enter the market to grow and learn together with an exceptional team! Could this be your team? I hope so!
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://www.linkedin.com/in/amoedovic/" target="_blank">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
