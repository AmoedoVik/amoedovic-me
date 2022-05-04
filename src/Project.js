import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">WEB DEVELOPER PROJECTS</h1>
        <br/>
        <p className="heading p__color">
        These are some of my recent projects! They are all inspired by a fictional tech company with a 'synthwave' and 'cyberpunk' vibe. <br/>
        'Synthrise Corporation' is a 'fake corporation' that works in multiple fields, from music, artificial intelligence, robotics, space travel, movies, futuristic products and has been developing more and more technologies.<br/>
         Many of my side projects will be inspired by this 'fake company' I made up, they are great for practicing other skillsI want to acquire such as Unreal 5 technology<br/>
          (in my spare time)
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://s1.gifyu.com/images/synth.gif'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">SynthriseMovies</h5>
                     <h4 className="project__text">  A film platform inspired by the Netflix structure! 
                     <br/>
                         (Homepage UI, REST API, Next.js, Typescript, Tailwind, FirebaseAuth and StrypePayments)</h4>
                     <a href="https://synthrise-movies.vercel.app" target="_blank" className="project__btn">View Details</a>
                     <br/>
                     <a href="https://www.youtube.com/watch?v=jIQ10rh64gI" target="_blank" className="project__btn">Tutorial / Demo</a>

                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://s8.gifyu.com/images/synthbrain-1.gif'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Synthrise-Kyoto</h5>

                     <h4 className="project__text">'Synthrise' Corporations is pleased to present you our masterpiece 'Kyoto Experience' ハイテクノロジー
                     <br/>
                    (HTML, SCSS, Javascript)</h4>
                     <a href="https://whoweare-synthrise.vercel.app/index.html" target="_blank" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>



             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://s1.gifyu.com/images/synthnft-2.gif'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">SynthriseMusic</h5> 
                     <h4 className="project__text">Good times come with good music!
                     <br/>
                         (Next.js, Tailwind CSS, Spotify API, NextAuth, Recoil)   </h4>
                     <a href="https://youtu.be/3kNUyfJiJjs" target="_blank" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://s1.gifyu.com/images/synthnft-3.gif'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Synth-Store</h5>
                     <h4 className="project__text"> Are you Ready for the future? Synthrise will help you to adapt, check out some of our products in our store!
                      <br/>
                         (ReactAPI, Sanity, NextJs, Stripe )</h4>
                     <a href="https://synthrise-store.vercel.app" target="_blank" className="project__btn">View Details</a>
                     <br/>
                     <a href="https://www.youtube.com/watch?v=mjM9PaGCcOg" target="_blank" className="project__btn">Tutorial / Demo</a>
                     </div>
                 </div>
             </div>


     

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://s8.gifyu.com/images/synthsearch.gif'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Synthrise-Search Engine</h5>
                     <h4 className="project__text">Simple, quick and effective! Synthrise also has a search engine!
                     <br/>
                         (ReactJs, Tailwind CSS, GoogleSearch API, Dark-Mode)</h4>
                     <a href="https://synthrise-search.vercel.app/search" target="_blank" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             <a href="https://github.com/AmoedoVik" target="_blank">
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>
             </a>
           </div>
           
       </div>
       
    </div>
  );
}

export default Project;
