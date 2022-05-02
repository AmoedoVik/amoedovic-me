import React from "react";
import "./Blog.css";
import Blog1 from './img/samuraime.png';
import Blog2 from './img/samuraimentors.png';
import Blog3 from './img/SamuraiHer.png';
import Blog4 from './img/samurais.png'

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">What I'm looking for</h1>
        <p className="heading p__color" class="italic">
        “Show me a successful individual and I’ll show you someone who had real positive influences in his or her life.
         <br/>
        I don’t care what you do for a living—if you do it well I’m sure there was someone cheering you on or showing the way. 
        <br/>
         A mentor.” — Denzel Washington      
           </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Kaizen<br/>
                          改善, かいぜん</h5>
                         <h4 className="project__text">I always want to learn and improve in several areas. We can all improve at everything. And I want to develop more and more forever. I know that I can achieve high levels of performance with discipline, dedication, humility and focus. This is the path to success.</h4>
                    
                       </div>
                 </div>
              </div>

                    <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Mentorship!</h5>
                         <h4 className="project__text">A mentor who knows how to extract my best and knows how to guide me so that I can reach high levels of mastery in the areas where the company needs it most.</h4>
                      
                       </div>
                 </div>
              </div>


              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Leadership</h5>
                         <h4 className="project__text">A leadership that knows the weaknesses and strengths of its team and knows how to delegate functions and make everyone work together in a more productive and effective way.</h4>
                      
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Mastermind</h5>
                         <h4 className="project__text">''Collective intelligence'' is a fundamental point for the realization of humanity's great inventions. That's why it's essential to ''have a mastermind'' to be surrounded by people who want to improve and give their best.</h4>
                       
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
