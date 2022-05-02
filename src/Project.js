import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My web developer portfolio</h1>
        <p className="heading p__color">
        These are my recent works! All of them are inspired by a fictional tech company with a 'synthwave' and 'cyberpunk' vibe. 
        <br/>
        The 'Synthrise Corporation' is a 'fake corporation' working on multiple fronts, ranging from music, artificial intelligence,
        <br/> 
        robotics, space travel, movies, futuristic products and even web3 (NFT/Blockchain).
        <p/>
        All my side projects will be inspired by this 'fake company' I invented, they are great for practicing other skills I want to acquire. 
        <br/>
        (Unreal 5 in my spare time)
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
                     <h4 className="project__text">(Homepage UI, REST API, Next.js, Typescript, Tailwind, FirebaseAuth and StrypePayments)</h4>
                     <a href="https://synthrise-movies.vercel.app" target="_blank" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://s1.gifyu.com/images/synthnft-1.gif'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Synth-Azon Web 3.0 Blockchain</h5>
                     <h4 className="project__text">(Anchor - Rust), Next JS, Netlify, Phantom, Sanity.io, and Tailwind CSS</h4>
                     <a href="https://synthrise-store.vercel.app" target="_blank" className="project__btn">View Details</a>
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
                     <h4 className="project__text">(Next.js, Tailwind CSS, Spotify API, NextAuth, Recoil) </h4>
                     <a href="#" className="project__btn">View Details</a>
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
                     <h5 className="project__text">SynthriseCommerce</h5>
                     <h4 className="project__text">(ReactAPI, Sanity, NextJs, Stripe )</h4>
                     <a href="https://synthrise-store.vercel.app" target="_blank" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://s1.gifyu.com/images/synthnft-4.gif'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">SynthrisePages</h5>
                     <h4 className="project__text">Landingpage (HTML, CSS, Javascript)</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://s1.gifyu.com/images/synthnft-5.gif'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">SynthriseLocker</h5>
                     <h4 className="project__text">(NEXT.JS + NEXT-AUTH + PLANETSCALE + PRISMA + TYPESCRIPT + TAILWIND CSS)</h4>
                     <a href="#" className="project__btn">View Details</a>
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
